import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import { ICountrySlice } from '../entities/country/model/country/types';
import { IUserSlice } from '../entities/viewer/model/user/types';
import infoCountriesReducer from '../entities/country/model/country/infoCountrySlice';
import infoUserSliceReducer from '../entities/viewer/model/user/infoUserSlice';
import infoCountriesSaga from '../entities/country/model/country/infoCountriesSaga';

export const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    infoCountries: infoCountriesReducer,
    infoUser: infoUserSliceReducer,
  },
  middleware: [saga],
});

saga.run(infoCountriesSaga);

export interface IStore {
  infoCountries: ICountrySlice;
  infoUser: IUserSlice;
}
