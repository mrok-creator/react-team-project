import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import * as services from '../../shared/services/auth';

//registration

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, { rejectWithValue }) => {
    try {
      const newUser = await services.signUp(data);
      Notify.success(
        'Вітаю, Ви успішно зареєструвалися, тепер необхідно залогінитися.'
      );
      return newUser;
    } catch (error) {
      Notify.failure('Нажаль, щось пішло не так, спробуйте ще!');
      return rejectWithValue(error);
    }
  }
);

//login
export const signIn = createAsyncThunk(
  'auth/signIn',
  async (data, { rejectWithValue }) => {
    try {
      const user = await services.signIn(data);
      Notify.success('Вітаю, Ви успішно залогінились!');
      return user;
    } catch (error) {
      Notify.failure('Нажаль, щось пішло не так, спробуйте ще!');
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { accessToken } = auth;
      const user = await services.getCurrentUser(accessToken);
      Notify.success('Вітаю, Ви успішно залогінились!');
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//logOut
export const logOut = createAsyncThunk('auth/logOut', async () => {
  await services.logOut;
  Notify.success('Вітаю, логаут здійснено!');
  return;
});
