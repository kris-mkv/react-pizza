import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum SortProperty {
  RATING_ASC = 'rating',
  PRICE_ASC = 'price',
  PRICE_DESC = '-price',
  TITLE_ASC = 'title',
}

export type SortItem = {
  name: string;
  sortProperty: SortProperty;
};

interface FilterSliceState {
  categoryId: number;
  sort: SortItem;
}

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

export const selectFilter = (state: RootState) => state.filter;

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
