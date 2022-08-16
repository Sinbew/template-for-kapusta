import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

const getContacts = createAsyncThunk('contacts/get', async () => {
  try {
    const { data } = await axios.get('/contacts');

    return data;
  } catch (error) {
    console.log(error);
  }
});

const addContact = createAsyncThunk('/contacts/add', async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);

    return data;
  } catch (error) {
    return error;
  }
});

const deleteContact = createAsyncThunk('/contacts/delete', async id => {
  try {
    await axios.delete(`/contacts/${id}`);

    return id;
  } catch (error) {
    return error;
  }
});

export { getContacts, addContact, deleteContact };
