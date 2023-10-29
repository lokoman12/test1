import { ReactNode } from 'react';
import { TextInputProps } from 'react-native';
import { Style } from 'twrnc/dist/esm/types';

export type InputProps = TextInputProps & {
   required?: boolean;
   adornments?: Partial<Record<'start' | 'end', (color: string, size: number) => ReactNode>>;
   error?: string;
   label?: string;
};
