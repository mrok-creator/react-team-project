import { createSlice } from '@reduxjs/toolkit';
import { store } from 'redux/store';

const initialState = {
  testType: '',
  testAnswers: [],
};

const testSlice = createSlice({
  name: 'testInfo',
  initialState,
  reducers: {
    addType: (store, { payload }) => ({ ...store, testType: payload }),
    addAnswers: (store, { payload }) => ({ ...store, testAnswers: payload }),
    remove: () => ({ ...store, testAnswers: [] }),
  },
});

export const { actions } = testSlice;
export default testSlice.reducer;
