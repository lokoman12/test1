import React, { FC } from 'react';
import { Image, Pressable, View } from 'react-native';
import Icon from 'src/components/icon';
import styles from './styles';
import useAppSelector from 'src/hooks/useAppSelector';
import FastImage from 'react-native-fast-image';

type Props = {
   idOrUri: number | string;
   disabled?: boolean;
   onDelete: (idOrUri: string | number) => void;
};

const PictureThumbnail: FC<Props> = ({ idOrUri, onDelete, disabled = false }) => {
   const photos = useAppSelector((state) => state.user.data!.photos)!;
   const uri = typeof idOrUri === 'string' ? idOrUri : photos.find((photo) => photo.id === idOrUri)?.photo;

   const handlePress = () => onDelete(idOrUri);

   return (
      <Pressable disabled={disabled} onPress={handlePress} style={styles.container}>
         <FastImage style={styles.image} source={{ uri }} />
         {!disabled && (
            <View style={styles.iconContainer}>
               <Icon name='cross' fill='#fff' size={16} />
            </View>
         )}
      </Pressable>
   );
};

export default PictureThumbnail;
