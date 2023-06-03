import { createContext } from 'react';

export const context = createContext();

export const initialState = {
  menu: 0,
  pairs: [],
  loading: false,
};
