import { createSlice } from '@reduxjs/toolkit';

export const fullInfoCountrySlice = createSlice({
  name: 'fullInfoCountry',
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    getFullInfoCountryFetch: (state) => ({
      ...state,
      isLoading: true,
    }),
    getFullInfoCountrySuccess: (state, action) => ({
      ...state,
      data: action.payload.data,
      isLoading: false,
    }),
    getFullInfoCountryFailure: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export default fullInfoCountrySlice.reducer;

export const { getFullInfoCountryFetch, getFullInfoCountrySuccess, getFullInfoCountryFailure } =
  fullInfoCountrySlice.actions;
