import { IStore } from '../types';

export const getFullInfoCountry = (state: IStore) => state.fullInfoCountry.data;

export const getOptionsCountry = (state: IStore) => {
  return state.fullInfoCountry.data.map((item) => ({
    value: item.name.common,
    label: item.name.common,
  }));
};
