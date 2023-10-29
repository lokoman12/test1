import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';
import getStyles from './styles';
import { TypographyVariant } from './types';

type Props = TextProps & {
   variant?: TypographyVariant;
   text?: string;
   centered?: boolean;
};

const Typography: FC<Props> = ({ variant = 'text', centered = false, text = '', style, ...props }) => {
   const styles = getStyles(variant, centered);

   return (
      <Text style={[styles, style]} {...props}>
         {text}
      </Text>
   );
};

export default Typography;
