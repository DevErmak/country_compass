import { configureStore } from '@reduxjs/toolkit';
import fullInfoCountryReducer from './country/fullInfoCountrySlice';

import fullInfoCountrySaga from './country/fullInfoCountrySaga';

import createSagaMiddleware from 'redux-saga';

export const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    fullInfoCountry: fullInfoCountryReducer,
  },
  middleware: [saga],
});

saga.run(fullInfoCountrySaga);
