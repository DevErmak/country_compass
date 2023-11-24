import { IStore } from '@/app/appStore';
import { formModal } from './types';

export const getState = (state: IStore): IStore => state;

export const getIsActiveModal = (state: IStore): boolean => state.infoUser.infoModal.isActiveModal;

export const getFormModal = (state: IStore): formModal => state.infoUser.infoModal.formModal;

export const getIsAuthentication = (state: IStore): boolean => state.infoUser.isAuthentication;

export const getListFavoriteCountries = (
  state: IStore,
): {
  nameCountry: string;
  nameCapital: string;
  currencies: string;
  region: string;
  languages: string;
  population: string;
  flags: string;
  flagsAlt: string;
  coatOfArms: string;
}[] => state.infoUser.listFavoriteCountries;

export const getUserName = (state: IStore): string => state.infoUser.userName;

export const getBufferCountry = (
  state: IStore,
):
  | {
      nameCountry: string;
      nameCapital: string;
      currencies: string;
      region: string;
      languages: string;
      population: string;
      flags: string;
      flagsAlt: string;
      coatOfArms: string;
    }
  | undefined => state.infoUser.countryBuffer;

export const getIsActiveMenu = (state: IStore): boolean => state.infoUser.isActiveMenu;
