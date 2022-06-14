import { createSlice } from '@reduxjs/toolkit';

import {} from './auth-operation';

const initialState = {
  user: {
    // email: '',
    // id: '',
  },
  accessToken: null,
  refreshToken: null,
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export default authSlice.reducer;
