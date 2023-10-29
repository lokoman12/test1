import React, { FC, useState } from 'react';
import { View } from 'react-native';
import Padding from 'src/components/ui/padding';
import Typography from 'src/components/ui/typography';
import AgreeCheckbox from '../questionnaireScreens/cityChoose/agreeCheckbox';
import LoginButtons from './loginButtons';
import styles from './styles';
import WelcomeLogo from './welcomeLogo';

const Welcome: FC = () => {
   return (
      <Padding centered style={styles.container}>
         <View style={styles.header}>
            <WelcomeLogo />
            <Typography variant='text-14' text='Войти через' />
         </View>
         <LoginButtons />
      </Padding>
   );
};

export default Welcome;
