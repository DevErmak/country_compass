import { IStore } from '../types';

export const getListCountry = (state: IStore) => state.infoCountries.listCountries;

export const ge = (state: IStore) => state.infoCountries;

export const getOptionsCountry = (state: IStore) => {
  return state.infoCountries.listCountries.map((item) => ({
    value: item.name.common,
    label: item.name.common,
  }));
};
