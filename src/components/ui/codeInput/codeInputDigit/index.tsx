import React, { FC } from 'react';
import { View } from 'react-native';
import Typography from '../../typography';
import getStyles from './styles';

type Props = {
   digit?: string;
   active?: boolean;
};

const CodeInputDigit: FC<Props> = ({ digit, active = false }) => {
   const styles = getStyles(active);

   return (
      <View style={styles.container}>
         <Typography text={digit} />
      </View>
   );
};

export default CodeInputDigit;
