import { createSlice } from '@reduxjs/toolkit';

import { signIn, logIn, logOut, getCurrentUser } from './auth-operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.isLogged = true;
      state.user = payload.user;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.isLogged = true;
      state.user = payload.user;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.token = null;
      state.isLogged = false;
      state.user.name = '';
      state.user.email = '';
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLogged = true;
    },
    [getCurrentUser.rejected]: (state, _) => {
      state.token = '';
    },
  },
});

export default authSlice.reducer;
