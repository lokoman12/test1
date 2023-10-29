import { useAuthRequest } from 'expo-auth-session/providers/google';
import React, { FC, useEffect } from 'react';
import Icon from 'src/components/icon';
import useAppNavigation from 'src/hooks/useAppNavigation';
import axiosInterceptor from 'src/utils/axiosInterceptor.util';
import LoginButton from './loginButton';
import { getAccessToken, getExpireTime, getRefreshToken } from 'src/utils/cookies.utils';
import { useDispatch } from 'react-redux';
import { setUserData } from 'src/store/reducers/user.reducer';
import useSignInWithGoogle from 'src/hooks/useSignInWithGoogle';
import PhoneNumberLoginButton from './phoneNumberLoginButton';
import EmailLoginButton from './emailLoginButton';
import GoogleLoginButton from './googleLoginButton';
import AppleLoginButton from './appleLoginButton';

const LoginButtons: FC = () => {
   return (
      <>
         <PhoneNumberLoginButton />
         <EmailLoginButton />
         <GoogleLoginButton />
         <AppleLoginButton />
      </>
   );
};

export default LoginButtons;
