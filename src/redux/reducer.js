import { createReducer } from '@reduxjs/toolkit';
import { addContact, delateContact, filterValue } from './actions';

const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactReducer = createReducer(parsedContacts || initialState, {
  [addContact]: (state, action) => {
    if (
      state.find(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )
    ) {
      alert('уже есть такой контакт');
      return state;
    }
    const newContactsList = [...state, action.payload];
    localStorage.setItem('contacts', JSON.stringify(newContactsList));
    return newContactsList;
  },
  [delateContact]: (state, action) => {
    const delateList = state.filter(contact => contact.id !== action.payload);
    localStorage.setItem('contacts', JSON.stringify(delateList));
    return delateList;
  },
});
export const filterReducer = createReducer('', {
  [filterValue]: (state, action) => action.payload,
});
