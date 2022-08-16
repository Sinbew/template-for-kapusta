import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filterContacts } from './contacts-actions';
import { getContacts, addContact, deleteContact } from './contacts-operations';

const itemsReducer = createReducer([], {
  [getContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(el => el.id !== action.payload),
});

const errorReducer = createReducer(null, {
  [getContacts.rejected]: (_, action) => action.payload,
  [addContact.rejected]: (_, action) => action.payload,
  [deleteContact.rejected]: (_, action) => action.payload,
  [getContacts.pending]: () => null,
  [addContact.pending]: () => null,
  [deleteContact.pending]: () => null,
});

const pendingReducer = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  error: errorReducer,
  pending: pendingReducer,
  filter: filterReducer,
});
