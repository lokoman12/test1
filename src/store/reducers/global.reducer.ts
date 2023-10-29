import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
   isServerError: false,
};

const slice = createSlice({
   name: 'global',
   initialState,
   reducers: {
      setIsServerError(state, { payload }: PayloadAction<boolean>) {
         state.isServerError = payload;
      },
   },
});

export default slice.reducer;

export const { setIsServerError } = slice.actions;
