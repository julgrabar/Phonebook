import { configureStore} from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
  import { authReducer } from "./auth/authSlice";
import persistStore from "redux-persist/es/persistStore";


export const store = configureStore({
    reducer:{
        contacts: contactsReducer,
        auth: authReducer
    },
    middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  }
)

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch