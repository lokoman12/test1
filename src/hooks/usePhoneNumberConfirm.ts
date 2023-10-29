import { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { apiConfirmPhoneNumber, apiGetUserData } from 'src/services/api.services';
import { setUserData } from 'src/store/reducers/user.reducer';
import { User } from 'src/types';
import { getAccessToken, getExpireTime, getRefreshToken } from 'src/utils/cookies.utils';
import useGetUserData from './useGetUserData';

const usePhoneNumberConfirm = (phone: string, code: string, isCreated: boolean) => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   const dispatch = useDispatch();

   const { getUserData } = useGetUserData();

   const confirmPhoneNumber = useCallback(async () => {
      setLoading(true);
      setError('');
      try {
         const response = await apiConfirmPhoneNumber(phone, code);
         const cookies = response.headers['set-cookie']!;
         const accessToken = getAccessToken(cookies);
         const refreshToken = getRefreshToken(cookies);
         const expiresAt = getExpireTime(cookies);

         dispatch(
            setUserData({
               phone,
               accessToken,
               refreshToken,
               expiresAt,
               isCreated,
            })
         );

         await getUserData();
      } catch (e) {
         setError(e as string);
      } finally {
         setLoading(false);
      }
   }, [code]);

   return { confirmPhoneNumber, loading, error };
};

export default usePhoneNumberConfirm;
