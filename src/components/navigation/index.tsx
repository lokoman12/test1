import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useAppSelector from 'src/hooks/useAppSelector';
import { mainRoutes, newUserRoutes, noAuthRoutes } from './routes';
import styles from './styles';
import ServerError from 'src/screens/serverError';

const Stack = createNativeStackNavigator();

const Navigation = () => {
   const user = useAppSelector((state) => state.user.data);

   const ref = useNavigationContainerRef();
   const insets = useSafeAreaInsets();

   const handleBackPress = () => true;

   const { isServerError } = useAppSelector((state) => state.global);

   useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);

      return BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
   }, []);

   const getRoutes = useCallback(() => {
      return mainRoutes;
   }, []);

   return (
      <NavigationContainer ref={ref}>
         <Stack.Navigator
            screenOptions={{
               headerShown: false,
               animation: 'slide_from_right',
               gestureEnabled: false,
               contentStyle: [
                  {
                     paddingTop: insets.top,
                     paddingBottom: insets.bottom,
                     paddingLeft: insets.left,
                     paddingRight: insets.right,
                  },
                  styles.content,
               ],
            }}
         >
            {isServerError ? (
               <Stack.Screen name='serverError' component={ServerError} />
            ) : (
               getRoutes().map((route) => <Stack.Screen key={route.name} {...route} />)
            )}
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default Navigation;
