import React, { FC } from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import Icon from 'src/components/icon';
import getStyles from './styles';
import { CheckboxProps } from './types';

const Checkbox: FC<CheckboxProps> = ({ checked, onCheck, label, style, ...props }) => {
   const handlePress = () => onCheck?.(!checked);

   const styles = getStyles(checked);

   return (
      <Pressable style={[styles.checkbox, style as StyleProp<ViewStyle>]} onPress={handlePress} {...props}>
         <View style={styles.checkmark}>{checked && <Icon name='check' size={16} stroke='#fff' />}</View>
         {label && label}
      </Pressable>
   );
};

export default Checkbox;
