import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/contacts-reducers';
import authReducer from './auth/auth-slice';
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

// const persistConfigContacts = {
//   key: 'contacts',
//   storage,

// };

const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  // blacklist: ['user'],
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(persistConfigAuth, authReducer),
  },

  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };

// const persistedReducer = persistedReducer(persistConfig, authReducer);
