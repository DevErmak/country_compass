import { configureStore } from '@reduxjs/toolkit';
import infoCountriesReducer from './country/infoCountrySlice';

import infoCountriesSaga from './country/infoCountriesSaga';

import createSagaMiddleware from 'redux-saga';

export const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    infoCountries: infoCountriesReducer,
  },
  middleware: [saga],
});

saga.run(infoCountriesSaga);
