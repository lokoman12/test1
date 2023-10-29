import { ReactNode } from 'react';
import { PressableProps, StyleProp, TextStyle } from 'react-native';

export type ButtonVariant = 'outlined' | 'filled' | 'text';

export type ButtonProps = PressableProps & {
   text: string;
   icon?: (color: string, size: number) => ReactNode;
   centeredContent?: boolean;
   variant?: ButtonVariant;
};
