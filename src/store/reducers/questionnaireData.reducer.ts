import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Gender, QuestionnaireData } from 'src/types';

type State = {
   data: QuestionnaireData;
};

const initialState: State = {
   data: {
      city: '',
      firstName: '',
      about: '',
      gender: '' as Gender,
      searching: '' as Gender,
      username: '',
      purpose: 'EMPTY',
      tags: [],
   },
};

const questionnaireDataSlice = createSlice({
   name: 'questionnaireData',
   initialState,
   reducers: {
      setQuestionnaireData(state, { payload }: PayloadAction<Partial<QuestionnaireData>>) {
         state.data = { ...state.data, ...payload };
      },
      unsetQuestionnaireData(state) {
         state.data = initialState.data;
      },
   },
});

export default questionnaireDataSlice.reducer;

export const { setQuestionnaireData, unsetQuestionnaireData } = questionnaireDataSlice.actions;
