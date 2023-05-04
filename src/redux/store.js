import { configureStore } from '@reduxjs/toolkit';

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
