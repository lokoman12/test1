import { BottomSheetModal } from '@gorhom/bottom-sheet';
import AnimatedLottieView from 'lottie-react-native';
import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import BackButton from 'src/components/ui/backButton';
import Button from 'src/components/ui/button';
import Padding from 'src/components/ui/padding';
import Typography from 'src/components/ui/typography';
import { citiesWithNames } from 'src/constants/userDataWithDisplayData.constants';
import useAppNavigation from 'src/hooks/useAppNavigation';
import useAppSelector from 'src/hooks/useAppSelector';
import { apiUpdateUserData } from 'src/services/api.services';
import { setQuestionnaireData } from 'src/store/reducers/questionnaireData.reducer';
import { City } from 'src/types';
import CityChooseModal from './cityChooseModal';
import styles from './styles';
import useUpdateUserData from 'src/hooks/useUpdateUserData';
import AgreeCheckbox from 'src/screens/questionnaireScreens/cityChoose/agreeCheckbox';

const CityChoose = () => {
   const modalRef = useRef<BottomSheetModal>(null);

   const presentModal = () => modalRef.current?.present();
   const closeModal = () => modalRef.current?.close();

   const { city } = useAppSelector((state) => state.questionnaireData.data);
   const dispatch = useDispatch();
   const setCity = (city: City) => dispatch(setQuestionnaireData({ city }));

   const { updateUserData, loading, error } = useUpdateUserData({ city });

   const { navigate } = useAppNavigation();

   const [agree, setAgree] = useState(false);

   const handleCityChoose = (city: City) => {
      setCity(city);
      closeModal();
   };

   const handlePress = async () => {
      updateUserData().then(() => {
         navigate('successQuestionnaire');
      });
   };

   return (
      <Padding centered>
         <BackButton />
         <View style={styles.content}>
            <Typography variant='bold-1' text='Откуда вы?' />
            <View>
               {/* <Image source={require('assets/images/locationMap.png')} /> */}
               <AnimatedLottieView autoPlay speed={0.7} autoSize source={require('assets/animations/locationMap.json')} />
               {city && <Typography centered text={citiesWithNames.find(({ city: c }) => city === c)!.name} />}
            </View>
            <Button onPress={presentModal} text='Выбрать город' variant='outlined' />
            <CityChooseModal onCityChoose={handleCityChoose} ref={modalRef} />
         </View>
         <View style={styles.bottomContainer}>
            <AgreeCheckbox checked={agree} onCheck={setAgree} />
            {error && <Typography variant='text-12' style={styles.error} text={error} />}
            <Button disabled={!city || loading || !agree} onPress={handlePress} text='Принять' />
         </View>
      </Padding>
   );
};

export default CityChoose;
