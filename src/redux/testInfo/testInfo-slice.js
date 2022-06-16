import { createSlice } from '@reduxjs/toolkit';

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
    // remove: () => '',
    clear: () => ({ testType: '', testAnswers: [] }),
  },
});

export const { actions } = testSlice;
export default testSlice.reducer;
