import React, { Dispatch, FC } from 'react';
import { Pressable, View } from 'react-native';
import colors from 'src/colors';
import Icon from 'src/components/icon';
import Padding from 'src/components/ui/padding';
import styles from './styles';

type Props = {
   length: number;
   page: number;
   setPage: Dispatch<number>;
};

const OnboardingFooter: FC<Props> = ({ length, page, setPage }) => {
   const handlePrev = () => setPage(page - 1);
   const handleNext = () => setPage(page + 1);

   return (
      <Padding style={styles.container}>
         <View style={styles.dots}>
            {Array(length)
               .fill(0)
               .map((_i, index) => (
                  <View key={index} style={styles.dot(page === index)} />
               ))}
         </View>
         <View style={styles.buttons}>
            {page > 0 && (
               <Pressable onPress={handlePrev} style={[styles.button, styles.buttonLeft]}>
                  <Icon size={12} fill={colors.primary} name='onboardingArrowLeft' />
               </Pressable>
            )}
            <Pressable onPress={handleNext} style={[styles.button, styles.buttonRight]}>
               <Icon size={12} fill='#fff' name='onboardingArrowRight' />
            </Pressable>
         </View>
      </Padding>
   );
};

export default OnboardingFooter;
