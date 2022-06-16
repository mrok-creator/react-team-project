import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testType: 'Testing Teory',
  testAnswers: [],
};

const testSlice = createSlice({
  name: 'testInfo',
  initialState,
  reducers: {
    addType: (store, { payload }) => ({ ...store, testType: payload }),
    addAnswers: (store, { payload }) => ({ ...store, testAnswers: payload }),
    remove: () => '',
  },
});

export const { actions } = testSlice;
export default testSlice.reducer;
