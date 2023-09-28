import { IFullInfoCountry } from './typesIFullInfoCountry';
import { Cnr, IListCountries } from './typesIListCountries';

export interface IOptionCountry {
  value: string;
  label: string;
}

export interface CountrySlice {
  listCountries: Array<IListCountries>;
  fullInfoCountry?: Array<IFullInfoCountry>;
  isLoading: boolean;
  isFullInfoCountry: boolean;
}
