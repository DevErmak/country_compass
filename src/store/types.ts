import { CountrySlice } from './country/types';
import { IUserSlice } from './user/types';

export interface IStore {
  infoCountries: CountrySlice;
  infoUser: IUserSlice;
}
