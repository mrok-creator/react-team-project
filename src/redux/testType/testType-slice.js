import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const testSlice = createSlice({
  name: 'testType',
  initialState,
  reducers: {
    add: (_, { payload }) => payload,
    remove: () => '',
  },
});

export const { actions } = testSlice;
export default testSlice.reducer;
