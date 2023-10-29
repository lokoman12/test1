import React, { FC, memo } from 'react';
import { Pressable } from 'react-native';
import colors from 'src/colors';
import Icon from 'src/components/icon';
import Typography from 'src/components/ui/typography';
import { Gender } from 'src/types';
import getStyles from './styles';

type Props = {
   gender: Gender;
   selected: boolean;
   onSelect: () => void;
};

const GenderThumbnail: FC<Props> = ({ gender, selected, onSelect }) => {
   const styles = getStyles(gender, selected);

   return (
      <Pressable onPress={onSelect} style={styles.container}>
         <Icon name={`gender${gender}`} fill={selected ? 'white' : colors[`gender${gender}`]} size={60} />
         <Typography style={styles.text} variant='bold-2' text={gender === 'M' ? 'Мужчина' : 'Женщина'} />
      </Pressable>
   );
};

export default memo(GenderThumbnail);
