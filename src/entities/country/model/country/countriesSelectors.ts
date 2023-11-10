import { IStore } from '../../../../app/appStore';

export const getState = (state: IStore) => state;

export const getListCountry = (state: IStore) => state.infoCountries.listCountries;

export const getFullInfoCountry = (state: IStore) => state.infoCountries.fullInfoCountry;

export const getFormatFullInfoCountry = (state: IStore) => {
  if (
    state.infoCountries.fullInfoCountry !== undefined &&
    state.infoCountries.fullInfoCountry.length !== 0
  )
    return {
      nameCountry: state.infoCountries.fullInfoCountry[0].name.official,
      nameCapital: state.infoCountries.fullInfoCountry[0].capital.join(', '),
      currencies: Object.keys(state.infoCountries.fullInfoCountry[0].currencies).join(', '),
      region: state.infoCountries.fullInfoCountry[0].region,
      languages: Object.keys(state.infoCountries.fullInfoCountry[0].languages).join(', '),
      population: state.infoCountries.fullInfoCountry[0].population
        .toString()
        .replace(/,/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
      flags: state.infoCountries.fullInfoCountry[0].flags.svg,
      flagsAlt: state.infoCountries.fullInfoCountry[0].flags.alt || '',
      coatOfArms: state.infoCountries.fullInfoCountry[0].coatOfArms.svg,
    };
};

export const getIsFullInfoCountry = (state: IStore) => state.infoCountries.isFullInfoCountry;

export const getIsLoading = (state: IStore) => state.infoCountries.isLoading;

export const getOptionsCountry = (state: IStore) => {
  return state.infoCountries.listCountries.map((item) => ({
    value: item.name.official,
    label: item.name.official,
  }));
};

export const getInfoErrorResponse = (state: IStore) => state.infoCountries.infoErrorResponse;
