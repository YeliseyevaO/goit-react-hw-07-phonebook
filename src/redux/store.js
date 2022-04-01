import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterReducer } from './reducer.js';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
