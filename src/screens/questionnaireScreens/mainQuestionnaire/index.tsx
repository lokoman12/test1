import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Button from 'src/components/ui/button';
import Padding from 'src/components/ui/padding';
import Typography from 'src/components/ui/typography';
import useAppNavigation from 'src/hooks/useAppNavigation';
import useAppSelector from 'src/hooks/useAppSelector';
import { apiUpdateUserData } from 'src/services/api.services';
import { ValidationError, array, object, string } from 'yup';
import QuestionnaireSection from '../questionnaireSection';
import { FIO_MAX, TAGS_MAX, TAGS_MIN, USERNAME_MAX, USERNAME_MIN, USERNAME_NOT_VALID, questionnaireSections } from './constants';
import styles from './styles';

const validationSchema = object({
   firstName: string().max(150, FIO_MAX),
   username: string()
      .min(1, USERNAME_MIN)
      .max(150, USERNAME_MAX)
      .matches(/^[\w.@+-]+$/, USERNAME_NOT_VALID),
   tags: array().required(TAGS_MIN).min(1, 'Выберите хотя бы один интерес!').max(10, TAGS_MAX),
   purpose: string(),
});

const MainQuestionnaire = () => {
   const { navigate } = useAppNavigation();

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string>();

   const { firstName, username, tags, purpose } = useAppSelector((state) => state.questionnaireData.data)!;

   const handlePress = async () => {
      try {
         setLoading(true);
         setError('');
         validationSchema.validateSync({ firstName, username, tags, purpose });
         await apiUpdateUserData({ firstName, username, tags, purpose });
         navigate('genderQuestionnaire');
      } catch (e) {
         if (typeof e === 'string') {
            setError(e as string);
         } else {
            setError((e as ValidationError).errors[0]);
         }
      } finally {
         setLoading(false);
      }
   };

   return (
      <ScrollView>
         <Padding style={styles.container}>
            <Typography variant='bold-1' text='Давайте познакомимся' />
            {questionnaireSections.map((props, index) => (
               <QuestionnaireSection key={index} {...props} />
            ))}
            <View style={styles.bottomContainer}>
               {error && <Typography variant='text-12' style={styles.error} text={error} />}
               <Button disabled={loading} onPress={handlePress} text='Далее' />
            </View>
         </Padding>
      </ScrollView>
   );
};

export default MainQuestionnaire;
