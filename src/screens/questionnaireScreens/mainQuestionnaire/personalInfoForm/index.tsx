import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'src/components/icon';
import Input from 'src/components/ui/input';
import useAppSelector from 'src/hooks/useAppSelector';
import { setQuestionnaireData } from 'src/store/reducers/questionnaireData.reducer';
import styles from './styles';

const PersonalInfoForm = () => {
   const { firstName, about, username } = useAppSelector((state) => state.questionnaireData.data);

   const dispatch = useDispatch();

   const setFirstName = (firstName: string) => dispatch(setQuestionnaireData({ firstName }));
   const setAbout = (about: string) => dispatch(setQuestionnaireData({ about }));
   const setUsername = (username: string) => dispatch(setQuestionnaireData({ username }));

   return (
      <View style={styles.container}>
         <Input
            value={firstName}
            maxLength={150}
            onChangeText={setFirstName}
            label='ФИО'
            placeholder='ФИО'
            adornments={{
               start: (color, size) => <Icon name='user' stroke={color} size={size} />,
            }}
         />
         <Input
            value={about}
            maxLength={1500}
            onChangeText={setAbout}
            multiline
            numberOfLines={2}
            label='О себе'
            placeholder='Напишите немного о себе'
            adornments={{
               start: (color, size) => <Icon name='infoCircle' stroke={color} size={size} />,
            }}
         />
         <Input
            required
            value={username}
            maxLength={150}
            onChangeText={setUsername}
            label='Никнейм'
            placeholder='Никнейм'
            adornments={{
               start: (color, size) => <Icon name='user' stroke={color} size={size} />,
            }}
         />
      </View>
   );
};

export default PersonalInfoForm;
