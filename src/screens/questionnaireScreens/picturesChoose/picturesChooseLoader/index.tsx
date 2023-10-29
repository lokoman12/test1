import React, { FC, startTransition, useEffect, useRef } from 'react';
import styles from './styles';
import Animated, { Easing, Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { View } from 'react-native';

type Props = {
   progress: number;
};

const PicturesChooseLoader: FC<Props> = ({ progress }) => {
   const width = useSharedValue(0);

   const animatedStyle = useAnimatedStyle(() => {
      const interpolatedWidth = interpolate(width.value, [0, 1], [0, 100], { extrapolateRight: Extrapolation.CLAMP });
      return {
         width: withTiming(`${interpolatedWidth}%`, {
            duration: 200,
         }),
      };
   });

   useEffect(() => {
      width.value = progress;
   }, [progress]);

   return (
      <View style={styles.container}>
         <Animated.View style={[styles.bar, animatedStyle]} />
      </View>
   );
};

export default PicturesChooseLoader;
