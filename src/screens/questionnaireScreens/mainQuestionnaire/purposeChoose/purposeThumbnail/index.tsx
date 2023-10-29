import React, { FC, memo } from 'react';
import { Image, Pressable, View } from 'react-native';
import Typography from 'src/components/ui/typography';
import { PurposeWithShowingData } from 'src/constants/userDataWithDisplayData.constants';
import getStyles from './styles';

type Props = Omit<PurposeWithShowingData, 'purpose'> & {
   active: boolean;
   onPress: () => void;
};

const PurposeThumbnail: FC<Props> = ({ active, onPress, title, description, imageSrc }) => {
   const styles = getStyles(active);

   return (
      <Pressable onPress={onPress} style={styles.container}>
         <Image source={imageSrc} />
         <View style={styles.textInfo}>
            <Typography variant='bold-2' text={title} />
            <Typography variant='text-12' text={description} />
         </View>
      </Pressable>
   );
};

export default memo(PurposeThumbnail);
