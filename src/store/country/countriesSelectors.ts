import { IStore } from '../types';

export const getState = (state: IStore) => state;

export const getListCountry = (state: IStore) => state.infoCountries.listCountries;

export const getFullInfoCountry = (state: IStore) => state.infoCountries.fullInfoCountry;

export const getIsFullInfoCountry = (state: IStore) => state.infoCountries.isFullInfoCountry;

export const getIsLoading = (state: IStore) => state.infoCountries.isLoading;

export const getOptionsCountry = (state: IStore) => {
  return state.infoCountries.listCountries.map((item) => ({
    value: item.name.official,
    label: item.name.official,
  }));
};

export const getInfoErrorResponse = (state: IStore) => state.infoCountries.infoErrorResponse;
