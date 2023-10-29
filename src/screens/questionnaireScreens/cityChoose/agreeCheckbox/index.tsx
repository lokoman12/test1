import React, { FC } from 'react';
import { View } from 'react-native';
import Checkbox from 'src/components/ui/checkbox';
import { CheckboxProps } from 'src/components/ui/checkbox/types';
import Typography from 'src/components/ui/typography';
import styles from './styles';

const AgreeCheckbox: FC<CheckboxProps> = (props) => {
   return (
      <Checkbox
         label={
            <View>
               <Typography variant='text-12' style={styles.label} text='Войдя в приложение вы соглашаетесь с' />
               <Typography variant='text-12' style={styles.link} text='правилами сервиса' />
            </View>
         }
         {...props}
      />
   );
};

export default AgreeCheckbox;
