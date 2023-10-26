export interface IUserSlice {
  userName: string;
  listFavoriteCountries: Array<string>;
  isAuthentication: boolean;
  infoModal: { isActiveModal: boolean; formModal: formModal };
  authToken: string;
}

export enum formModal {
  register = 'register',
  login = 'login',
}
