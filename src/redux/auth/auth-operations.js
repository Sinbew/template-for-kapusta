import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const tokenAuth = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signIn = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    tokenAuth.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    tokenAuth.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    await axios.post('/users/logout', credentials);
    tokenAuth.unset();
  } catch (error) {
    console.log(error);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const localToken = state.auth.token;

    if (!localToken) {
      return rejectWithValue('error');
    }
    tokenAuth.set(localToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
