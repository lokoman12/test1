import React from 'react';
import Icon from 'src/components/icon';
import useAppNavigation from 'src/hooks/useAppNavigation';
import LoginButton from '../loginButton';

const PhoneNumberLoginButton = () => {
   const { navigate } = useAppNavigation();

   const handlePress = () => navigate('loginWithPhoneNumber');

   return (
      <LoginButton
         onPress={handlePress}
         text='Номер телефона'
         icon={(color, size) => <Icon name='phone' strokeWidth={0.75} size={size} stroke={color} />}
      />
   );
};

export default PhoneNumberLoginButton;
