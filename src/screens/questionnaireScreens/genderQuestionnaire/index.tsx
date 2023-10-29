import React, { useState } from 'react';
import { View } from 'react-native';
import BackButton from 'src/components/ui/backButton';
import Button from 'src/components/ui/button';
import Padding from 'src/components/ui/padding';
import Typography from 'src/components/ui/typography';
import useAppNavigation from 'src/hooks/useAppNavigation';
import useAppSelector from 'src/hooks/useAppSelector';
import { apiUpdateUserData } from 'src/services/api.services';
import QuestionnaireSection from '../questionnaireSection';
import { questionnaireSections } from './constants';
import styles from './styles';

const GenderQuestionnaire = () => {
   const { navigate } = useAppNavigation();

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string>();

   const { gender, searching } = useAppSelector((state) => state.questionnaireData.data)!;

   const handlePress = async () => {
      try {
         setLoading(true);
         setError('');
         await apiUpdateUserData({ gender, searching });
         navigate('picturesChoose');
      } catch (e) {
         setError(e as string);
      } finally {
         setLoading(false);
      }
   };

   return (
      <Padding centered>
         <BackButton />
         <View style={styles.content}>
            {questionnaireSections.map((props, index) => (
               <QuestionnaireSection key={index} {...props} />
            ))}
         </View>
         <View style={styles.bottomContainer}>
            {error && <Typography variant='text-12' style={styles.error} text={error} />}
            <Button disabled={!gender || !searching || loading} onPress={handlePress} text='Далее' />
         </View>
      </Padding>
   );
};

export default GenderQuestionnaire;
