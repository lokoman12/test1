import * as FileSystem from 'expo-file-system';
import { launchCameraAsync, launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import React, { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'src/components/icon';
import BackButton from 'src/components/ui/backButton';
import Button from 'src/components/ui/button';
import Padding from 'src/components/ui/padding';
import Typography from 'src/components/ui/typography';
import useAppNavigation from 'src/hooks/useAppNavigation';
import useAppSelector from 'src/hooks/useAppSelector';
import { apiAddPhotos, apiDeletePhotos } from 'src/services/api.services';
import { setUserData } from 'src/store/reducers/user.reducer';
import { Photo } from 'src/types';
import { toCamel } from 'src/utils/case.utils';
import QuestionnaireSection from '../questionnaireSection';
import PicturesChooseLoader from './picturesChooseLoader';
import PicturesChooseThumbnail from './picturesChooseThumbnail';
import PictureThumbnail from './pictureThumbnail';
import styles from './styles';

const MAX_PICTURES_COUNT = 10;
const MAX_PICTURE_SIZE = 10485760;
const MAX_PICTURES_AT_TIME = 5;

const getPictureSize = async (uri: string) => {
   const fileInfo = await FileSystem.getInfoAsync(uri);
   if (fileInfo.exists) {
      return fileInfo.size;
   }
   return 0;
};

const PicturesChoose = () => {
   const { navigate } = useAppNavigation();

   const dispatch = useDispatch();

   const [photosToDelete, setPhotosToDelete] = useState<number[]>([]); // array of ids
   const [photosToAdd, setPhotosToAdd] = useState<string[]>([]); // array of local uris

   const photos = useAppSelector((state) => state.user.data?.photos) || [];
   const filteredPhotos = [...photos].filter((photo) => !photosToDelete.includes(photo.id));

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string>();

   const [loadProgress, setLoadProgress] = useState(-1);

   const canAddPhotosCount = MAX_PICTURES_COUNT - filteredPhotos.length - photosToAdd.length;
   const selectionLimit = Math.min(canAddPhotosCount, MAX_PICTURES_AT_TIME - photosToAdd.length);

   const handlePress = async () => {
      try {
         setLoading(true);
         setError('');
         if (photosToDelete.length) {
            await apiDeletePhotos(photosToDelete);

            dispatch(setUserData({ photos: filteredPhotos }));
            setPhotosToDelete([]);
         }
         if (photosToAdd.length) {
            setLoadProgress(0);
            const response = await apiAddPhotos(photosToAdd, ({ progress }) => setLoadProgress(progress!));
            const newPhotos = toCamel(response.data as Photo[]);

            dispatch(setUserData({ photos: newPhotos }));
            setPhotosToAdd([]);
         }

         navigate('cityChoose');
      } catch (e) {
         setError(e as string);
      } finally {
         setLoadProgress(-1);
         setLoading(false);
      }
   };

   const handleLoadPhoto = useCallback(async () => {
      try {
         setError('');
         setLoading(true);

         const { assets } = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            quality: 1,
            aspect: [1, 1],
            allowsMultipleSelection: true,
            selectionLimit,
         });

         if (!assets?.length) {
            return;
         }

         const newPicturesToAdd = [...photosToAdd];

         for (const asset of assets) {
            const { uri } = asset;
            const pictureSize = await getPictureSize(uri);
            if (pictureSize >= MAX_PICTURE_SIZE) {
               setError('Размер одной или нескольких фотографий превышает 10 мб!');
               continue;
            }
            newPicturesToAdd.push(uri);
         }

         setPhotosToAdd(newPicturesToAdd);
      } catch (e) {
         setError((e as { message: string }).message);
      } finally {
         setLoading(false);
      }
   }, [photosToAdd, selectionLimit]);

   const handleTakePhoto = useCallback(async () => {
      try {
         setError('');
         setLoading(true);

         const { assets } = await launchCameraAsync({
            mediaTypes: MediaTypeOptions.Images,
            quality: 1,
            aspect: [1, 1],
         });
         if (!assets?.length) {
            return;
         }

         const newPicturesToAdd = [...photosToAdd];

         for (const asset of assets) {
            const { uri } = asset;
            const pictureSize = await getPictureSize(uri);
            if (pictureSize >= MAX_PICTURE_SIZE) {
               setError('Размер одной или нескольких фотографий превышает 10 мб!');
               continue;
            }
            newPicturesToAdd.push(uri);
         }

         setPhotosToAdd(newPicturesToAdd);
      } catch (e) {
         setError((e as { message: string }).message);
      } finally {
         setLoading(false);
      }
   }, [photosToAdd]);

   const handlePictureDelete = (idOrUri: string | number) => {
      if (typeof idOrUri === 'string') {
         // delete a recently choosed picture
         setPhotosToAdd((prev) => prev.filter((uri) => uri !== idOrUri));
      } else {
         // delete already added to server picture
         setPhotosToDelete((prev) => [...prev, idOrUri]);
      }
   };

   return (
      <Padding centered>
         <BackButton />
         <View style={styles.container}>
            <QuestionnaireSection
               title='Добавьте фотографию'
               subtitle={`Вы можете добавить аккаунту до 10 фотографий. \nЗа раз можно добавить до 5 фотографий.`}
               content={() => (
                  <View style={styles.content}>
                     <PicturesChooseThumbnail
                        disabled={!canAddPhotosCount || !selectionLimit || loading}
                        title='Добавить фото с устройства'
                        subtitle='Установить фото из галереи'
                        icon={(color, size) => <Icon name='photo' fill={color} size={size} />}
                        onPress={handleLoadPhoto}
                     />
                     <PicturesChooseThumbnail
                        disabled={!canAddPhotosCount || !selectionLimit || loading}
                        title='Сделать фото'
                        subtitle='Сделать фото на камеру'
                        icon={(color, size) => <Icon name='camera' fill={color} size={size} />}
                        onPress={handleTakePhoto}
                     />
                  </View>
               )}
            />
            <View style={styles.picturesContainer}>
               <FlatList
                  numColumns={5}
                  scrollEnabled={false}
                  data={[...filteredPhotos, ...photosToAdd]}
                  renderItem={({ item: photoOrUri, index }) => {
                     const idOrUri = typeof photoOrUri === 'string' ? photoOrUri : photoOrUri.id;

                     return (
                        <View style={styles.pictureItem}>
                           <PictureThumbnail disabled={loading} onDelete={handlePictureDelete} idOrUri={idOrUri} key={index} />
                        </View>
                     );
                  }}
               />
            </View>
            {loadProgress !== -1 && <PicturesChooseLoader progress={loadProgress} />}
         </View>

         <View style={styles.bottomContainer}>
            {error && <Typography variant='text-12' style={styles.error} text={error} />}
            <Button disabled={canAddPhotosCount === MAX_PICTURES_COUNT || loading} onPress={handlePress} text='Далее' />
         </View>
      </Padding>
   );
};

export default PicturesChoose;
