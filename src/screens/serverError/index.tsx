import { View, Text } from 'react-native';
import React from 'react';
import Padding from 'src/components/ui/padding';
import AnimatedLottieView from 'lottie-react-native';
import styles from './styles';
import Typography from 'src/components/ui/typography';
import Button from 'src/components/ui/button';
import useGetUserData from 'src/hooks/useGetUserData';

const ServerError = () => {
   const { getUserData, loading } = useGetUserData();

   return (
      <Padding centered>
         <View style={styles.content}>
            <Typography centered text='Упс... Ошибка сервера!' variant='bold-1' />
            <Typography
               style={styles.subtitle}
               centered
               text='Возникла ошибка сервера. Попробуйте позже или перезапустите приложение.'
               variant='text-14'
            />
            <AnimatedLottieView style={styles.animation} source={require('assets/animations/sadMagnifying.json')} autoPlay />
         </View>

         <Button onPress={getUserData} disabled={loading} text='Попробовать еще раз' />
      </Padding>
   );
};

export default ServerError;
