import React, { useEffect } from 'react';
import Icon from 'src/components/icon';
import LoginButton from '../loginButton';
import useSignInWithGoogle from 'src/hooks/useSignInWithGoogle';

const GoogleLoginButton = () => {
   const { signInWithGoogle, loading } = useSignInWithGoogle();

   return <LoginButton disabled={loading} onPress={signInWithGoogle} text='Google ID' icon={(_color, size) => <Icon name='google' size={size} />} />;
};

export default GoogleLoginButton;
