import { IStore } from '../types';

export const getState = (state: IStore) => state;

export const getIsActiveModal = (state: IStore) => state.infoUser.isActiveModal;

export const getIsAuthentication = (state: IStore) => state.infoUser.isAuthentication;

export const getListFavoriteCountries = (state: IStore) => state.infoUser.listFavoriteCountries;

export const getUserName = (state: IStore) => state.infoUser.userName;
