import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filter from './slices/filterSlice';
import search from './slices/searchSlice';
import cart from './slices/cartSlice';
import pizza from './slices/pizzaSlice';

export const store = configureStore({
  reducer: {
    filter,
    search,
    cart,
    pizza,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
