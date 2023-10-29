import React, { FC, useState } from 'react';
import { View } from 'react-native';
import Button from 'src/components/ui/button';
import CodeInput from 'src/components/ui/codeInput';
import Typography from 'src/components/ui/typography';
import usePhoneNumberConfirm from 'src/hooks/usePhoneNumberConfirm';
import styles from './styles';
import { ConfirmPhoneNumberProps } from './types';
import BackButton from 'src/components/ui/backButton';
import Padding from 'src/components/ui/padding';

const CODE_LENGTH = 4;

const ConfirmPhoneNumber: FC<ConfirmPhoneNumberProps> = ({
   route: {
      params: { phone, isCreated },
   },
}) => {
   const [code, setCode] = useState('');
   const { confirmPhoneNumber, loading, error } = usePhoneNumberConfirm(phone, code, isCreated);

   const isCodeValid = code.length === CODE_LENGTH;

   return (
      <Padding centered>
         <BackButton />

         <View style={styles.content}>
            <Typography variant='bold-1' text='Введите код подтверждения' />
            <CodeInput value={code} onChangeText={setCode} label='Введите четырехзначный код' error={error} codeLength={4} />
         </View>

         <Button centeredContent disabled={!isCodeValid || loading} text='Далее' onPress={confirmPhoneNumber} />
      </Padding>
   );
};

export default ConfirmPhoneNumber;
