import { IFullInfoCountry } from './typesIFullInfoCountry';
import { IListCountries } from './typesIListCountries';

export interface IOptionCountry {
  value: string;
  label: string;
}

export interface ICountrySlice {
  listCountries: Array<IListCountries>;
  fullInfoCountry?: Array<IFullInfoCountry>;
  isLoading: boolean;
  isFullInfoCountry: boolean;
  infoErrorResponse: string;
}
