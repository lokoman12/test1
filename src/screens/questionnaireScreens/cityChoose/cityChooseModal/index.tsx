import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetFlatList, BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { FC, ForwardedRef, forwardRef, useCallback } from 'react';
import { ListRenderItem, Pressable } from 'react-native';
import Typography from 'src/components/ui/typography';
import { CityWithName, citiesWithNames } from 'src/constants/userDataWithDisplayData.constants';
import { City } from 'src/types';
import styles from './styles';

const Backdrop: FC<BottomSheetBackdropProps> = ({ ...props }) => <BottomSheetBackdrop disappearsOnIndex={-1} {...props} pressBehavior='close' />;

type Props = {
   onCityChoose: (city: City) => void;
};

const keyExtractor = ({ city }: CityWithName) => city;

const CityChooseModal = forwardRef(({ onCityChoose }: Props, ref: ForwardedRef<BottomSheetModal>) => {
   const renderItem = useCallback<ListRenderItem<CityWithName>>(
      ({ item: { city, name } }) => (
         <Pressable onPress={() => onCityChoose(city)} style={({ pressed }) => styles.listSection(pressed)}>
            <Typography text={name} />
         </Pressable>
      ),
      []
   );

   return (
      <BottomSheetModal backdropComponent={Backdrop} enablePanDownToClose={false} ref={ref} snapPoints={['25%', '70%']}>
         <BottomSheetFlatList
            maxToRenderPerBatch={8}
            initialNumToRender={4}
            data={citiesWithNames}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
         />
      </BottomSheetModal>
   );
});

export default CityChooseModal;
