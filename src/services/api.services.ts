import { AxiosProgressEvent } from 'axios';
import {
   addPhotosEndpoint,
   deletePhotosEndpoint,
   deleteTagsEndpoint,
   sendSmsEndpoint,
   logoutEndpoint,
   phoneNubmerConfirmEndpoint,
   tokenRefreshEndpoint,
   userDataEndpoint,
} from 'src/constants/api.constants';
import { store } from 'src/store';
import { QuestionnaireData, Tag, User } from 'src/types';
import axiosInterceptor from 'src/utils/axiosInterceptor.util';
import { toSnake } from 'src/utils/case.utils';

export const apiRefreshToken = (refresh: string) =>
   axiosInterceptor.post(tokenRefreshEndpoint, {
      refresh,
   });

export const apiSendSms = (phone: string) =>
   axiosInterceptor.put(sendSmsEndpoint, {
      phone,
   });

export const apiLogout = (refresh: string) =>
   axiosInterceptor.post(logoutEndpoint, {
      refresh,
   });

export const apiConfirmPhoneNumber = (phone: string, totp_code: string) =>
   axiosInterceptor.post(phoneNubmerConfirmEndpoint, {
      phone,
      totp_code,
   });

export const apiSignInWithGoogle = (access_token: string) =>
   axiosInterceptor.post('/auth/google/', {
      access_token,
   });

export const apiUpdateUserData = async (data: Partial<QuestionnaireData>) => {
   const existingTags = store.getState().user.data?.tags;
   if (data.tags && existingTags?.length) {
      await apiDeleteTags(['delete_all']);
   }
   return axiosInterceptor.patch(userDataEndpoint, toSnake(data));
};

export const apiGetUserData = async () => axiosInterceptor.get<User>(userDataEndpoint);

export const apiDeleteTags = (tags: Tag[]) => axiosInterceptor.delete(deleteTagsEndpoint, { data: { tags } });

export const apiDeletePhotos = (ids: number[]) => axiosInterceptor.delete(deletePhotosEndpoint, { data: { ids } });

export const apiAddPhotos = async (pictures: string[], onUploadProgress?: (progressEvent: AxiosProgressEvent) => void) => {
   const formData = new FormData();

   for (const uri of pictures) {
      const name = uri.split('/').pop();
      const type = 'image/*';

      formData.append('pictures', { name, uri, type } as any, name);
   }

   return axiosInterceptor.post(addPhotosEndpoint, formData, {
      headers: {
         'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
   });
};
