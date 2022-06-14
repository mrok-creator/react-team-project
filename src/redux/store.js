import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import testReducer from './test/test-slice';
import authReducer from './auth/auth-slice';

const userPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['accessToken'],
};

const persistedReducer = persistReducer(userPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    test: testReducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
