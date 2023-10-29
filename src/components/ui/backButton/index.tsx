import { View, Text, Pressable } from 'react-native';
import React from 'react';
import Icon from 'src/components/icon';
import useAppNavigation from 'src/hooks/useAppNavigation';
import styles from './styles';

const BackButton = () => {
   const { goBack } = useAppNavigation();

   return (
      <View style={styles.container}>
         <Pressable onPress={goBack}>
            <Icon name='arrowLeft' size={20} fill='#000' />
         </Pressable>
      </View>
   );
};

export default BackButton;
