import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import Button from 'src/components/ui/button';
import Padding from 'src/components/ui/padding';
import Typography from 'src/components/ui/typography';
import useSmsSend from 'src/hooks/useSmsSend';
import PhoneNumberInput from './phoneNumberInput';
import styles from './styles';
import BackButton from 'src/components/ui/backButton';

const phoneRegex = /^7\d{9,10}$/;

const LoginWithPhoneNumber = () => {
   const [phone, setPhone] = useState('');
   const { sendSms, loading, wait, error } = useSmsSend(phone);

   const [waitTime, setWaitTime] = useState('');

   const handleChange = (text: string) => {
      setPhone(text);
   };

   useEffect(() => {
      const minutes = Math.floor(wait / 60)
         .toString()
         .padStart(2, '0');
      const seconds = Math.floor(wait % 60)
         .toString()
         .padStart(2, '0');
      setWaitTime(`${minutes}:${seconds}`);
   }, [wait]);

   const isPhoneValid = useMemo(() => phoneRegex.test(phone), [phone]);

   return (
      <Padding centered>
         <BackButton />

         <View style={styles.content}>
            <Typography variant='bold-1' text='Войти через номер телефона' />
            <PhoneNumberInput error={error} value={phone} onChangeText={handleChange} />
         </View>

         <Button
            centeredContent
            disabled={!isPhoneValid || loading || wait > 0}
            text={wait > 0 ? `Запросить код повторно через ${waitTime}` : 'Далее'}
            onPress={sendSms}
         />
      </Padding>
   );
};

export default LoginWithPhoneNumber;
