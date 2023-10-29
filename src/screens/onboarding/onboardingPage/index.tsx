import AnimatedLottieView from 'lottie-react-native';
import React, { FC } from 'react';
import { View } from 'react-native';
import Padding from 'src/components/ui/padding';
import Typography from 'src/components/ui/typography';
import styles from './styles';
import { OnboardingPageProps } from './types';

const OnboardingPage: FC<OnboardingPageProps> = ({ title, description, lottieSrc }) => {
   return (
      <Padding>
         <View style={styles.animationContainer}>
            <AnimatedLottieView source={lottieSrc} autoPlay style={styles.animation} />
         </View>
         <View style={styles.content}>
            <Typography variant='bold-1' text={title} />
            <Typography variant='bold-2' text={description} style={styles.description} />
         </View>
      </Padding>
   );
};

export default OnboardingPage;
