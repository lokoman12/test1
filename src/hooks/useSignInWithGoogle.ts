// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { apiSignInWithGoogle } from 'src/services/api.services';
import { setUserData } from 'src/store/reducers/user.reducer';
import { getAccessToken, getExpireTime, getRefreshToken } from 'src/utils/cookies.utils';
import useGetUserData from './useGetUserData';

const androidClientId = '797703371992-2mtimqa3utj79eskt7b509gb99e5cfi7.apps.googleusercontent.com';
// const webClientId = '797703371992-a20hv317eq8f3ap26ffc15ssg5m7a8ai.apps.googleusercontent.com';

// GoogleSignin.configure({
//    webClientId: androidClientId,
//    offlineAccess: true,
// });

const useSignInWithGoogle = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   const dispatch = useDispatch();

   const { getUserData } = useGetUserData();

   const [googleAccessToken, setGoogleAccessToken] = useState<string>();

   useEffect(() => {
      if (!googleAccessToken) {
         return;
      }

      (async () => {
         setLoading(true);
         setError('');

         try {
            const { data, headers } = await apiSignInWithGoogle(googleAccessToken);

            const cookies = headers['set-cookie']!;
            const accessToken = getAccessToken(cookies);
            const refreshToken = getRefreshToken(cookies);
            const expiresAt = getExpireTime(cookies);
            const isCreated = data.is_created;

            dispatch(
               setUserData({
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
      })();
   }, [googleAccessToken]);

   const signInWithGoogle = async () => {
      // await GoogleSignin.hasPlayServices();
      // await GoogleSignin.signIn();
      // const { accessToken } = await GoogleSignin.getTokens();
      // setGoogleAccessToken(accessToken);
   };

   return { signInWithGoogle, loading, error };
};

export default useSignInWithGoogle;
