import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { FC, ReactNode, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import useAppSelector from 'src/hooks/useAppSelector';
import useGetUserData from 'src/hooks/useGetUserData';
import { persistor } from 'src/store';

SplashScreen.preventAutoHideAsync();

type Props = {
   children: ReactNode;
};

const DataLoader: FC<Props> = ({ children }) => {
   const [fontsLoaded, fontsLoadError] = useFonts({
      SFLight: require('assets/fonts/SFLight.ttf'),
      SF: require('assets/fonts/SFRegular.otf'),
      SFMedium: require('assets/fonts/SFMedium.otf'),
      SFSemibold: require('assets/fonts/SFSemibold.ttf'),
      SFBold: require('assets/fonts/SFBold.otf'),
   });
   const { loading: userDataLoading, getUserData } = useGetUserData();

   const user = useAppSelector((state) => state.user.data);

   const appIsReady = (fontsLoaded || fontsLoadError) && !userDataLoading;

   const onLayout = useCallback(async () => {
      if (appIsReady) {
         await SplashScreen.hideAsync();
      }
   }, [appIsReady]);

   useEffect(() => {
      persistor.flush().then(() => {
         if (!user) {
            return;
         }

         getUserData();
      });
   }, []);

   if (!appIsReady) {
      return null;
   }

   return (
      <View style={{ flex: 1 }} onLayout={onLayout}>
         <PersistGate persistor={persistor} loading={null}>
            {children}
         </PersistGate>
         {appIsReady && <StatusBar backgroundColor='white' style='dark' />}
      </View>
   );
};

export default DataLoader;
