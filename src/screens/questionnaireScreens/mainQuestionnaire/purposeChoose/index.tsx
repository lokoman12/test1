import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { purposesWithShowingData } from 'src/constants/userDataWithDisplayData.constants';
import useAppSelector from 'src/hooks/useAppSelector';
import { setQuestionnaireData } from 'src/store/reducers/questionnaireData.reducer';
import { Purpose } from 'src/types';
import PurposeThumbnail from './purposeThumbnail';
import styles from './styles';

const PurposeChoose = () => {
   const { purpose: choosedPurpose } = useAppSelector((state) => state.questionnaireData.data)!;
   const dispatch = useDispatch();

   const setPurpose = (purpose: Purpose) => dispatch(setQuestionnaireData({ purpose }));

   const handlePurposeChoose = (purpose: Purpose) => {
      if (choosedPurpose === purpose) {
         setPurpose('EMPTY');
      } else {
         setPurpose(purpose);
      }
   };

   const renderItems = useCallback(
      () =>
         purposesWithShowingData.map(({ purpose, ...showingData }, index) => (
            <PurposeThumbnail key={index} active={choosedPurpose === purpose} onPress={() => handlePurposeChoose(purpose)} {...showingData} />
         )),
      [choosedPurpose]
   );

   return <View style={styles.container}>{renderItems()}</View>;
};

export default PurposeChoose;
