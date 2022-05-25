import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { fetchCurrentUserQuery, loginQuery, logoutQuery, registerQuery } from './authOperations';

const init = {
  user: {name: null, email: null },
  token: null,
  isLoggedIn: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: init,
  extraReducers: {
      [loginQuery.fulfilled]: (_, {payload}) => ({
            token: payload.token,
            user: payload.user,
            isLoggedIn: true
          }),
      [registerQuery.fulfilled]: (_, {payload}) => ({
        token: payload.token,
        user: payload.user,
        isLoggedIn: true
      }),
      [logoutQuery.fulfilled]: () => ({
        token: null,
        user: {name: null, email: null },
        isLoggedIn: false
      }),
      [fetchCurrentUserQuery.fulfilled]:(state, {payload})=>({
        ...state,
        isLoggedIn: true,
        user: payload,
        
      })
  },
});

const persistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"]
}


export const authReducer =persistReducer( persistConfig, authSlice.reducer);