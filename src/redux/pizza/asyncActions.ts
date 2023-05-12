import { createAsyncThunk } from '@reduxjs/toolkit';

import { supabase } from '../../config/supabaseClient';
import { FetchPizzaParams } from './types';

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
