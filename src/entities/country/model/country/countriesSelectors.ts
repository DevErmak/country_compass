import { IStore } from '@/app/appStore';
import { IFullInfoCountry } from './typesIFullInfoCountry';
import { IListCountries } from './typesIListCountries';

export const getState = (state: IStore): IStore => state;

export const getListCountry = (state: IStore): IListCountries[] =>
  state.infoCountries.listCountries;

export const getFullInfoCountry = (state: IStore): IFullInfoCountry[] | undefined =>
  state.infoCountries.fullInfoCountry;

export const getFormatFullInfoCountry = ({
  infoCountries: {
    fullInfoCountry: [fullInfoCountry],
  },
}: IFullInfoCountry) => {
  if (fullInfoCountry)
    return {
      nameCountry: fullInfoCountry.name.official,
      nameCapital: fullInfoCountry.capital.join(', '),
      currencies: Object.keys(fullInfoCountry.currencies).join(', '),
      region: fullInfoCountry.region,
      languages: Object.keys(fullInfoCountry.languages).join(', '),
      population: fullInfoCountry.population
        .toString()
        .replace(/,/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
      flags: fullInfoCountry.flags.svg,
      flagsAlt: fullInfoCountry.flags.alt || '',
      coatOfArms: fullInfoCountry.coatOfArms.svg,
    };
};

export const getIsFullInfoCountry = (state: IStore): boolean =>
  state.infoCountries.isFullInfoCountry;

export const getIsLoading = (state: IStore): boolean => state.infoCountries.isLoading;

export const getOptionsCountry = (
  state: IStore,
): {
  value: string;
  label: string;
}[] => {
  return state.infoCountries.listCountries.map((item) => ({
    value: item.name.official,
    label: item.name.official,
  }));
};

export const getInfoErrorResponse = (state: IStore): string =>
  state.infoCountries.infoErrorResponse;
