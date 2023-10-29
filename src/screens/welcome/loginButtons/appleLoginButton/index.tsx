import React from 'react';
import LoginButton from '../loginButton';
import Icon from 'src/components/icon';

const AppleLoginButton = () => {
   return <LoginButton text='Apple ID' icon={(color, size) => <Icon name='apple' size={size} fill={color} />} />;
};

export default AppleLoginButton;
