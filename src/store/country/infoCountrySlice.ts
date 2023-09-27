import { createSlice } from '@reduxjs/toolkit';

export const infoCountriesSlice = createSlice({
  name: 'infoCountries',
  initialState: {
    listCountries: [],
    fullInfoCountry: [],
    isLoading: false,
  },
  reducers: {
    getFullInfoCountryFetch: (state) => ({
      ...state,
      isLoading: true,
    }),
    getFullInfoCountrySuccess: (state, action) => ({
      ...state,
      fullInfoCountry: action.payload.data,
      isLoading: false,
    }),
    getFullInfoCountryFailure: (state) => ({
      ...state,
      isLoading: false,
    }),
    getListCountryFetch: (state) => ({
      ...state,
      isLoading: true,
    }),
    getListCountrySuccess: (state, action) => ({
      ...state,
      listCountries: action.payload.data,
      isLoading: false,
    }),
    getListCountryFailure: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export default infoCountriesSlice.reducer;

export const {
  getFullInfoCountryFetch,
  getFullInfoCountrySuccess,
  getFullInfoCountryFailure,
  getListCountryFetch,
  getListCountrySuccess,
  getListCountryFailure,
} = infoCountriesSlice.actions;
