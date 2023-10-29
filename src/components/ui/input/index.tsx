import React, { FC, useState } from 'react';
import { TextInput, View } from 'react-native';
import colors from 'src/colors';
import Typography from '../typography';
import getStyles from './styles';
import { InputProps } from './types';

const ICON_SIZE = 18;

const Input: FC<InputProps> = ({ label, error, adornments, style, required = false, ...props }) => {
   const [focused, setFocused] = useState(false);

   const styles = getStyles(focused);

   const handleFocus = () => setFocused(true);
   const handleBlur = () => setFocused(false);

   return (
      <View style={[styles.container, style]}>
         {label && <Typography variant='text-12' text={`${label}${required ? ' *' : ''}`} />}
         <View style={styles.inputContainer}>
            {adornments?.start?.(focused ? colors.primary : colors.darkgray, ICON_SIZE)}
            <TextInput
               onFocus={handleFocus}
               onBlur={handleBlur}
               placeholderTextColor={colors.semiTransparentGray}
               style={styles.textInput}
               {...props}
            />
            {adornments?.end?.(focused ? colors.primary : colors.darkgray, ICON_SIZE)}
         </View>
         {error && <Typography variant='text-12' text={error} style={styles.error} />}
      </View>
   );
};

export default Input;
