import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SearchSliceState } from './types';

const initialState: SearchSliceState = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
