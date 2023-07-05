import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import authSlice from "./auth/auth"

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authSlice)

export const store = configureStore({
  reducer:{
    auth: persistedReducer,
  } 
});

export const persistor = persistStore(store)

