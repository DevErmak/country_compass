import { createSlice } from '@reduxjs/toolkit';

export const infoCountriesSlice = createSlice({
  name: 'infoCountries',
  initialState: {
    listCountries: [],
    fullInfoCountry: [],
    isFullInfoCountry: false,
    isLoading: false,
    infoErrorResponse: '',
  },
  reducers: {
    getFullInfoCountryFetch: (state, { payload }) => ({
      ...state,
      isLoading: true,
    }),
    getFullInfoCountrySuccess: (state, action) => ({
      ...state,
      fullInfoCountry: action.payload.data,
      isLoading: false,
      isFullInfoCountry: action.payload.isFullInfoCountry,
      infoErrorResponse: '',
    }),
    getFullInfoCountryFailure: (state, { payload }) => ({
      ...state,
      infoErrorResponse: payload,
      isLoading: false,
    }),
    getFullInfoCountryClear: (state) => ({
      ...state,
      fullInfoCountry: [],
      isFullInfoCountry: false,
    }),
    getListCountriesFetch: (state) => ({
      ...state,
      isLoading: true,
    }),
    getListCountrySuccess: (state, action) => ({
      ...state,
      listCountries: action.payload.data,
      isLoading: false,
      infoErrorResponse: '',
    }),
    getListCountryFailure: (state, { payload }) => ({
      ...state,
      infoErrorResponse: payload,
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
  getFullInfoCountryClear,
} = infoCountriesSlice.actions;
