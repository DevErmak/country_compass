import { configureStore } from '@reduxjs/toolkit';
import infoCountriesReducer from './country/infoCountrySlice';
import infoUserReducer from './user/infoUserSlice';

import infoCountriesSaga from './country/infoCountriesSaga';

import createSagaMiddleware from 'redux-saga';

export const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    infoCountries: infoCountriesReducer,
    infoUser: infoUserReducer,
  },
  middleware: [saga],
  // preloadedState: {infoCountries: infoUser:}
});

saga.run(infoCountriesSaga);
