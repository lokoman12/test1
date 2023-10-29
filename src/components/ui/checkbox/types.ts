import { ReactNode } from 'react';
import { PressableProps } from 'react-native';

export type CheckboxProps = PressableProps & {
   label?: ReactNode;
   checked: boolean;
   onCheck?: (checked: boolean) => void;
};
