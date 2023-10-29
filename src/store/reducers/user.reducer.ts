import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Photo, User } from 'src/types';
import { toCamel } from 'src/utils/case.utils';

type State = {
   data: Partial<User> | null;
};

const initialState: State = {
   data: null,
};

// TEMP
const replaceHTTPByHTTPS = (photos: Photo[]) => {
   return photos.map(({ id, ...urls }) => {
      const newPhoto = { id } as Photo;
      Object.keys(urls).map((key) => {
         type Key = keyof Omit<Photo, 'id'>;
         const url = urls[key as Key];
         if (url) {
            newPhoto[key as Key] = url.replace('http', 'https');
         }
      });
      return newPhoto;
   });
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUserData(state, { payload }: PayloadAction<Partial<User>>) {
         const newData = { ...payload };
         if ('photos' in payload) {
            newData.photos = replaceHTTPByHTTPS(payload.photos!);
         }
         state.data = toCamel({ ...state.data, ...newData });
      },
      unsetUserData(state) {
         state.data = null;
      },
   },
});

export default userSlice.reducer;

export const { setUserData, unsetUserData } = userSlice.actions;
