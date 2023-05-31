import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CartSliceState, PizzaItem } from './types';
import { findPizza } from '../../utils/findPizza';

const initialState: CartSliceState = {
  pizza: [],
  totalPrice: 0,
  amount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action: PayloadAction<PizzaItem>) {
      const result = findPizza(state, action.payload);

      if (result) {
        result.count++;
      } else {
        state.pizza.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.pizza.reduce((sum, item) => item.price * item.count + sum, 0);
      state.amount = state.pizza.reduce((num, item) => item.count + num, 0);
    },
    minusPizza(state, action: PayloadAction<PizzaItem>) {
      const result = findPizza(state, action.payload);
      const indexOfResult = state.pizza.indexOf(result);

      const minusIndicators = () => {
        state.amount--;
        state.totalPrice -= result.price;
      };

      if (result.count > 1) {
        result.count--;
        minusIndicators();
      } else {
        state.pizza.splice(indexOfResult, 1);
        minusIndicators();
      }
    },
    removePizza(state, action: PayloadAction<PizzaItem>) {
      const result = findPizza(state, action.payload);
      const indexOfResult = state.pizza.indexOf(result);

      state.pizza.splice(indexOfResult, 1);
      state.amount -= result.count;
      state.totalPrice -= result.price * result.count;
    },
    clearPizza(state) {
      state.pizza = [];
      state.totalPrice = 0;
      state.amount = 0;
    },
  },
});

export const { addPizza, minusPizza, removePizza, clearPizza } = cartSlice.actions;

export default cartSlice.reducer;
