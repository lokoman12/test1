import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import styles from './styles';

type Props = ViewProps & {
   centered?: boolean;
};

const Padding: FC<Props> = ({ centered, style, ...props }) => {
   return <View style={[styles.container, centered && styles.centered, style]} {...props} />;
};

export default Padding;
