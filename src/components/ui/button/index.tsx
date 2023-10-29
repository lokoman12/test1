import React, { FC, useState } from 'react';
import { GestureResponderEvent, Pressable, StyleProp, ViewStyle } from 'react-native';
import Typography from '../typography';
import getStyles from './styles';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({
   text,
   icon,
   disabled = false,
   onPressIn,
   onPressOut,
   style,
   centeredContent = true,
   variant = 'filled',
   ...props
}) => {
   const [pressed, setPressed] = useState(false);

   const styles = getStyles(variant, disabled!, pressed, centeredContent);

   const handlePressIn = (e: GestureResponderEvent) => {
      setPressed(true);
      onPressIn?.(e);
   };
   const handlePressOut = (e: GestureResponderEvent) => {
      setPressed(false);
      onPressOut?.(e);
   };

   return (
      <Pressable
         onPressIn={handlePressIn}
         onPressOut={handlePressOut}
         style={[styles.button, style as StyleProp<ViewStyle>]}
         disabled={disabled}
         {...props}
      >
         {icon && icon(styles.text.color as string, 16)}
         <Typography text={text} style={styles.text} />
      </Pressable>
   );
};

export default Button;
