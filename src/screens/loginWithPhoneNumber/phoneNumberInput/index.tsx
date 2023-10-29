import React, { FC } from 'react';
import Icon from 'src/components/icon';
import Input from 'src/components/ui/input';
import { InputProps } from 'src/components/ui/input/types';

const PhoneNumberInput: FC<InputProps> = ({ error, value, onChangeText }) => {
   return (
      <Input
         required
         maxLength={11}
         keyboardType='phone-pad'
         placeholder='79123456789'
         label='Номер телефона'
         error={error}
         value={value}
         onChangeText={onChangeText}
         adornments={{
            start: (color, size) => <Icon size={size} stroke={color} name='phone' />,
         }}
      />
   );
};

export default PhoneNumberInput;
