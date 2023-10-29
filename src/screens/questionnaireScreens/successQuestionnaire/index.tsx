import AnimatedLottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Padding from 'src/components/ui/padding';
import Typography from 'src/components/ui/typography';
import { unsetQuestionnaireData } from 'src/store/reducers/questionnaireData.reducer';
import { setUserData } from 'src/store/reducers/user.reducer';
import styles from './styles';
import useGetUserData from 'src/hooks/useGetUserData';

const SuccessQuestionnaire = () => {
   const dispatch = useDispatch();

   const { getUserData } = useGetUserData();

   useEffect(() => {
      getUserData().then(() => {
         setTimeout(() => {
            dispatch(setUserData({ isCreated: false }));
            dispatch(unsetQuestionnaireData());
         }, 2500);
      });
   }, []);

   return (
      <Padding style={styles.container} centered>
         <Typography centered variant='bold-1' text='Заполнение анкеты произведено успешно!' />
         <Typography style={styles.subtitle} centered text='Система подберет вам людей по интересам!' />
         {/* <FloatingImage source={require('assets/images/successLike.png')} /> */}
         <AnimatedLottieView loop={false} style={styles.animation} source={require('assets/animations/success.json')} autoPlay />
      </Padding>
   );
};

export default SuccessQuestionnaire;
