import React, { FC, useEffect } from 'react';
import { Animated, Easing, ImageProps, useAnimatedValue } from 'react-native';

const FloatingImage: FC<ImageProps> = (props) => {
   // const translateX = useAnimatedValue(0);
   const translateY = useAnimatedValue(0);

   useEffect(() => {
      Animated.timing(translateY, { useNativeDriver: true, toValue: 35, duration: 600, easing: Easing.inOut(Easing.quad) }).start();
      translateY.addListener(({ value }) => {
         if (value == 35) {
            Animated.timing(translateY, { useNativeDriver: true, toValue: 0, duration: 850, easing: Easing.inOut(Easing.quad) }).start();
         } else if (value == 0) {
            Animated.timing(translateY, { useNativeDriver: true, toValue: 35, duration: 600, easing: Easing.inOut(Easing.quad) }).start();
         }
      });
      // Animated.timing(translateX, { useNativeDriver: true, toValue: 15, duration: 1200, easing: Easing.inOut(Easing.quad) }).start();
      // translateX.addListener(({ value }) => {
      //    if (value == 15) {
      //       Animated.timing(translateX, { useNativeDriver: true, toValue: 0, duration: 1200, easing: Easing.inOut(Easing.quad) }).start();
      //    } else if (value == 0) {
      //       Animated.timing(translateX, { useNativeDriver: true, toValue: 15, duration: 1200, easing: Easing.inOut(Easing.quad) }).start();
      //    }
      // });
   }, []);

   return (
      <Animated.Image
         style={{
            transform: [{ translateY }],
         }}
         {...props}
      />
   );
};

export default FloatingImage;
