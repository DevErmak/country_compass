export interface IUserSlice {
  userName: string;
  listFavoriteCountries: Array<{
    nameCountry: string;
    nameCapital: string;
    currencies: string;
    region: string;
    languages: string;
    population: string;
    flags: string;
    flagsAlt: string;
    coatOfArms: string;
  }>;
  isAuthentication: boolean;
  infoModal: { isActiveModal: boolean; formModal: formModal };
}

export enum formModal {
  register = 'register',
  login = 'login',
}
