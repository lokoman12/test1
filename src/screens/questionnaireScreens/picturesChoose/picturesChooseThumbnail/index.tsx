import React, { FC, ReactNode } from 'react';
import { Pressable, View } from 'react-native';
import colors from 'src/colors';
import Typography from 'src/components/ui/typography';
import getStyles from './styles';

type Props = {
   title: string;
   subtitle: string;
   icon: (color: string, size: number) => ReactNode;
   onPress: () => void;
   disabled?: boolean;
};

const PicturesChooseThumbnail: FC<Props> = ({ title, subtitle, disabled = false, icon, onPress }) => {
   const styles = getStyles(disabled);

   return (
      <Pressable disabled={disabled} onPress={onPress} style={styles.container}>
         {icon(disabled ? colors.semiTransparentGray : colors.primary, 40)}
         <View style={styles.textInfo}>
            <Typography style={styles.text} variant='bold-2' text={title} />
            <Typography style={styles.text} variant='text-12' text={subtitle} />
         </View>
      </Pressable>
   );
};

export default PicturesChooseThumbnail;
