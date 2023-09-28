import { createSlice } from '@reduxjs/toolkit';

export const infoCountriesSlice = createSlice({
  name: 'infoCountries',
  initialState: {
    listCountries: [],
    fullInfoCountry: [],
    isFullInfoCountry: false,
    isLoading: false,
  },
  reducers: {
    getFullInfoCountryFetch: (state, { payload }) => ({
      ...state,
      isLoading: true,
    }),
    getFullInfoCountrySuccess: (state, action) => {
      return {
        ...state,
        fullInfoCountry: action.payload.data,
        isLoading: false,
        isFullInfoCountry: true,
      };
    },
    getFullInfoCountryFailure: (state) => ({
      ...state,
      isLoading: false,
    }),
    getListCountriesFetch: (state) => ({
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
  getListCountriesFetch,
  getListCountrySuccess,
  getListCountryFailure,
} = infoCountriesSlice.actions;
