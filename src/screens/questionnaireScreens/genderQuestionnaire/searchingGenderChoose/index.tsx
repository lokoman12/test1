import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import useAppSelector from 'src/hooks/useAppSelector';
import { setQuestionnaireData } from 'src/store/reducers/questionnaireData.reducer';
import { Gender } from 'src/types';
import GenderThumbnail from '../genderThumbnail';
import styles from './styles';

const SearchingGenderChoose = () => {
   const { searching } = useAppSelector((state) => state.questionnaireData.data);
   const dispatch = useDispatch();

   const setSearching = (searching: Gender) => dispatch(setQuestionnaireData({ searching }));

   return (
      <View style={styles.container}>
         <View style={styles.item}>
            <GenderThumbnail selected={searching === 'M'} onSelect={() => setSearching('M')} gender='M' />
         </View>
         <View style={styles.item}>
            <GenderThumbnail selected={searching === 'F'} onSelect={() => setSearching('F')} gender='F' />
         </View>
      </View>
   );
};

export default SearchingGenderChoose;
