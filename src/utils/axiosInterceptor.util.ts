import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import {
   accessTokenMaxAgeMs,
   addPhotosEndpoint,
   baseURL,
   deletePhotosEndpoint,
   sendSmsEndpoint,
   phoneNubmerConfirmEndpoint,
   tokenRefreshEndpoint,
   userDataEndpoint,
} from 'src/constants/api.constants';
import {
   INTERNAL_SERVER_ERROR,
   TOO_MANY_REQUESTS,
   USERNAME_ALREADY_USED,
   WRONG_CONFIRMATION_CODE,
   WRONG_PHONE_NUMBER,
   NO_INTERNET_CONNECITION,
   IMAGES_ARE_CORRUPTED,
} from 'src/constants/apiErrors.constants';
import { apiRefreshToken } from 'src/services/api.services';
import { store } from 'src/store';
import { setIsServerError } from 'src/store/reducers/global.reducer';
import { unsetQuestionnaireData } from 'src/store/reducers/questionnaireData.reducer';
import { setUserData, unsetUserData } from 'src/store/reducers/user.reducer';

const axiosInterceptor = axios.create({
   withCredentials: true,
   baseURL,
});

const onResponseFulfilled = (response: AxiosResponse<any, any>) => response;

const onResponseRejected = async (error: any) => {
   const endpoint = error.response?.config.url;
   const method = error.response?.config.method;
   const status = error.response?.status;
   const errorData = error.response?.data;
   console.log('[response error]', error.response);

   // TODO: make better check for no internet connection reject
   if (!status) {
      return Promise.reject(NO_INTERNET_CONNECITION);
   }

   if (status === 401) {
      if (endpoint === tokenRefreshEndpoint) {
         store.dispatch(unsetUserData());
         store.dispatch(unsetQuestionnaireData());
         return Promise.resolve();
      }

      const refresh = store.getState().user.data?.refreshToken!;
      const { data } = await axiosInterceptor.post(tokenRefreshEndpoint, {
         refresh,
      });
      const { access: newAccessToken, refresh: newRefreshToken } = data;
      const expiresAt = new Date(new Date().getTime() + accessTokenMaxAgeMs).toUTCString();
      store.dispatch(
         setUserData({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
            expiresAt,
         })
      );
      return axiosInterceptor(error.config);
   }

   if (status >= 500) {
      if (endpoint === userDataEndpoint && method === 'get') {
         store.dispatch(setIsServerError(true));
      }

      return Promise.reject(INTERNAL_SERVER_ERROR);
   }

   switch (endpoint) {
      case sendSmsEndpoint:
         switch (status) {
            case 400:
               return Promise.reject(WRONG_PHONE_NUMBER);
            case 429:
               const { wait } = error.response.data;

               return Promise.reject(Number(wait));
         }
      case phoneNubmerConfirmEndpoint:
         switch (status) {
            case 400:
               return Promise.reject(WRONG_CONFIRMATION_CODE);
         }
      case userDataEndpoint:
         if (method === 'patch') {
            if (errorData.username) {
               return Promise.reject(USERNAME_ALREADY_USED);
            }
         }
      case addPhotosEndpoint:
         if (status === 400) {
            // TODO: in future add check for error text
            return Promise.reject(IMAGES_ARE_CORRUPTED);
         }
      // TEMP: remove when corrupted images and max image size will be solved
      case deletePhotosEndpoint:
         return Promise.resolve();
   }

   // reject for any other unhandled error
   return Promise.reject(`Response error. Status code: ${status}`);
};

const onRequestFulfilled = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
   const accessToken = store.getState().user.data?.accessToken;

   config.headers.Authorization = `Bearer ${accessToken}` || '';

   return config;
};

axiosInterceptor.interceptors.request.use(onRequestFulfilled);
axiosInterceptor.interceptors.response.use(onResponseFulfilled, onResponseRejected);

export default axiosInterceptor;
