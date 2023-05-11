import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { supabase } from '../../config/supabaseClient';
import { RootState } from '../store';

type Pizza = {
  category: number;
  id: number;
  imageUrl: string;
  info: string;
  price: number;
  rating: number;
  sizes: number[];
  title: string;
  types: string[];
};

enum Status {
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzaSliceState {
  pizza: Pizza[];
  status: Status;
}

const initialState: PizzaSliceState = {
  pizza: [],
  status: Status.PENDING,
};

type FetchPizzaParams = {
  categoryId: number;
  selectedProperty: string;
  searchValue: string;
};

export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizzaData',
  async (params: FetchPizzaParams) => {
    const { categoryId, selectedProperty, searchValue } = params;
    let query = supabase.from('pizza').select();

    if (categoryId > 0) {
      query = query.eq('category', categoryId);
    }
    if (selectedProperty.includes('-')) {
      query = query.order(selectedProperty.replace('-', ''), { ascending: false });
    } else {
      query = query.order(selectedProperty);
    }
    if (searchValue) {
      query = query.ilike('title', `%${searchValue}%`);
    }

    return await query.throwOnError();
  },
);

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.pizza = [];
      state.status = Status.PENDING;
    });
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      // ! Lead to typification
      // @ts-ignore
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

export const selectPizzaData = (state: RootState) => state.pizza;

export default pizzaSlice.reducer;
