import React, { FC } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import Typography from '../typography';
import CodeInputDigit from './codeInputDigit';
import styles from './styles';

type Props = TextInputProps & {
   label?: string;
   error?: string;
   codeLength: number;
};

const CodeInput: FC<Props> = ({ codeLength, label, error, style, value = '', onChangeText, ...props }) => {
   const digitsArray = Array(codeLength).fill(0);

   const handleChange = (text: string) => {
      if (/^\d+$/.test(text) || text === '') {
         onChangeText?.(text);
      }
   };

   return (
      <View style={[styles.container, style]}>
         {label && <Typography text={`${label} *`} variant='text-12' />}
         <View style={styles.inputContainer}>
            {digitsArray.map((_digit, index) => (
               <CodeInputDigit active={index === Math.min(3, value.length)} key={index} digit={value[index]} />
            ))}
            <TextInput
               caretHidden
               value={value}
               onChangeText={handleChange}
               maxLength={codeLength}
               keyboardType='number-pad'
               style={styles.textInput}
               {...props}
            />
         </View>
         {error && <Typography variant='text-12' text={error} style={styles.error} />}
      </View>
   );
};

export default CodeInput;
