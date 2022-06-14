import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const testSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    add: (store, { payload }) => `${payload}`,
    remove: store => '',
  },
});

export const { actions } = testSlice;
export default testSlice.reducer;
