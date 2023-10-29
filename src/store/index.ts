import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import questionnaireDataReducer from './reducers/questionnaireData.reducer';
import userReducer from './reducers/user.reducer';
import globalReducer from './reducers/global.reducer';

const persistConfig = {
   key: 'root',
   storage: AsyncStorage,
   blacklist: ['global', 'questionnaireData'],
};

export const rootReducer = combineReducers({
   user: userReducer,
   questionnaireData: questionnaireDataReducer,
   global: globalReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
});

export const persistor = persistStore(store);
