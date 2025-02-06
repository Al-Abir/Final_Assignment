import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    loading: false,
    portfolioData: null,
  },
  reducers: {
    Showloading: (state) => {
      state.loading = true;
    },
    HideLoading: (state) => {
      state.loading = false;
    },
    SetportfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
  },
});

export const { Showloading, HideLoading, SetportfolioData } = rootSlice.actions;
export default rootSlice.reducer; // Correct export