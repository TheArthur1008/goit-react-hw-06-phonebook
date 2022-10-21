import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: {
    filter: '',
  },
  reducers: {
    filterAction(state, { payload }) {
      state.filter = payload;
    },
  },
});
export const { filterAction } = filterSlice.actions;
export default filterSlice.reducer;
