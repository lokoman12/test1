import React, { FC, useState } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { ButtonProps } from 'src/components/ui/button/types';
import Typography from 'src/components/ui/typography';
import getStyles from './styles';

const LoginButton: FC<ButtonProps> = ({ style, centeredContent, icon, text, disabled, ...props }) => {
   const [pressed, setPressed] = useState(false);

   const handlePressIn = () => setPressed(true);
   const handlePressOut = () => setPressed(false);

   const styles = getStyles(pressed, disabled!);

   return (
      <Pressable
         onPressIn={handlePressIn}
         onPressOut={handlePressOut}
         style={[styles.container, style as StyleProp<ViewStyle>]}
         disabled={disabled}
         {...props}
      >
         {icon?.(styles.text.color as string, 24)}
         <Typography style={styles.text} text={text} />
      </Pressable>
   );
};

export default LoginButton;
