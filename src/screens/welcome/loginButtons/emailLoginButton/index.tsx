import { View, Text } from 'react-native';
import React from 'react';
import LoginButton from '../loginButton';
import Icon from 'src/components/icon';

const EmailLoginButton = () => {
   return <LoginButton text='Email адрес' icon={(color, size) => <Icon name='envelope' strokeWidth={0.75} size={size} stroke={color} />} />;
};

export default EmailLoginButton;
