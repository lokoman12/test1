import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './src/store';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';

import 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { apiGetUserData, apiRefreshToken } from 'src/services/api.services';
import { setUserData } from 'src/store/reducers/user.reducer';
import useAppSelector from 'src/hooks/useAppSelector';
import DataLoader from 'src/components/dataLoader';
import Navigation from 'src/components/navigation';


export default function App() {
   return (
      <SafeAreaProvider>
         <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
               <Provider store={store}>
                  <PersistGate persistor={persistor} loading={null}>
                     <DataLoader>
                        <Navigation />
                     </DataLoader>
                  </PersistGate>
               </Provider>
            </BottomSheetModalProvider>
         </GestureHandlerRootView>
      </SafeAreaProvider>
   );
}
