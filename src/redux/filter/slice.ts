import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FilterSliceState, SortItem, SortProperty } from './types';

const initialState: FilterSliceState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: SortProperty.RATING_ASC,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<SortItem>) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
