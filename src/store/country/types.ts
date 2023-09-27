import { IFullInfoCountry } from './typesIFullInfoCountry';
import { IListCountries } from './typesIListCountries';

export interface IOptionCountry {
  value: string;
  label: string;
}

export interface CountrySlice {
  listCountries: Array<IListCountries>;
  fullInfoCountry?: Array<IFullInfoCountry>;
  isLoading: boolean;
}
