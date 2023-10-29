import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import useAppSelector from 'src/hooks/useAppSelector';
import { setQuestionnaireData } from 'src/store/reducers/questionnaireData.reducer';
import { Gender } from 'src/types';
import GenderThumbnail from '../genderThumbnail';
import styles from './styles';

const SelfGenderChoose = () => {
   const { gender } = useAppSelector((state) => state.questionnaireData.data);
   const dispatch = useDispatch();

   const setGender = (gender: Gender) => dispatch(setQuestionnaireData({ gender }));

   return (
      <View style={styles.container}>
         <View style={styles.item}>
            <GenderThumbnail selected={gender === 'M'} onSelect={() => setGender('M')} gender='M' />
         </View>
         <View style={styles.item}>
            <GenderThumbnail selected={gender === 'F'} onSelect={() => setGender('F')} gender='F' />
         </View>
      </View>
   );
};

export default SelfGenderChoose;
