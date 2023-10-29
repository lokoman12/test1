import React, { Dispatch, FC, memo } from 'react';
import { GestureResponderEvent, Pressable, PressableProps } from 'react-native';
import Typography from '../typography';
import getStyles from './styles';

type Props = PressableProps & {
   text: string;
   selected: boolean;
   onSelect: Dispatch<boolean>;
};

const Chip: FC<Props> = ({ onPress, selected, onSelect, text, ...props }) => {
   const handlePress = (e: GestureResponderEvent) => {
      onPress?.(e);
      onSelect(!selected);
   };

   const styles = getStyles(selected);

   return (
      <Pressable onPress={handlePress} style={styles.container} {...props}>
         <Typography style={styles.text} text={text} />
      </Pressable>
   );
};

export default memo(Chip);
