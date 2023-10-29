import React, { FC } from 'react';
import { View } from 'react-native';
import Typography from 'src/components/ui/typography';
import { IQuestionnaireSection } from '../types';
import styles from './styles';

const QuestionnaireSection: FC<IQuestionnaireSection> = ({ title, subtitle, content }) => {
   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Typography variant='bold-1' text={title} />
            <Typography variant='text-12' text={subtitle} style={styles.subtitle} />
         </View>
         {content({})}
      </View>
   );
};

export default QuestionnaireSection;
