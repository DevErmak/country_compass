import { IStore } from '../types';

export const getState = (state: IStore) => state;

export const getListCountry = (state: IStore) => state.infoCountries.listCountries;

export const getFullInfoCountry = (state: IStore) => state.infoCountries.fullInfoCountry;

export const getOptionsCountry = (state: IStore) => {
  return state.infoCountries.listCountries.map((item) => ({
    value: item.name.common,
    label: item.translations.rus.common,
  }));
};
