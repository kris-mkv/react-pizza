import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { PizzaSliceState, Status } from './types';
import { fetchPizza } from './asyncActions';

const initialState: PizzaSliceState = {
  pizza: [],
  status: Status.PENDING,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.pizza = [];
      state.status = Status.PENDING;
    });
    // !Fix: убрать any
    builder.addCase(fetchPizza.fulfilled, (state, action: PayloadAction<any>) => {
      state.pizza = action.payload.data;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.pizza = [];
      state.status = Status.ERROR;
      console.error(action.error);
    });
  },
});

export default pizzaSlice.reducer;
