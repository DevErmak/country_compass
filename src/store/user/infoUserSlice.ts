import { createSlice } from '@reduxjs/toolkit';
import { IUserSlice } from './types';

export const infoUserSlice = createSlice({
  name: 'infoUser',
  initialState: {
    userName: '',
    listFavoriteCountries: [],
    isAuthentication: false,
    infoModal: { isActiveModal: false, formModal: 'login' },
    authToken: '',
  } as IUserSlice,
  reducers: {
    addFavoriteCountry: (state, { payload }) => ({
      ...state,
      listFavoriteCountries: Array.from(new Set([...state.listFavoriteCountries, ...payload])),
    }),
    removeFavoriteCountry: (state, { payload }) => {
      const newListFavoriteCountries = state.listFavoriteCountries.filter(
        (item: string) => payload[0] !== item,
      );

      return {
        ...state,
        listFavoriteCountries: newListFavoriteCountries,
      };
    },
    clearAllFavoriteCountry: (state) => ({
      ...state,
      listFavoriteCountries: [],
    }),
    setUserName: (state, { payload }) => ({
      ...state,
      userName: payload,
    }),
    setAuthentication: (state, { payload }) => ({
      ...state,
      isAuthentication: payload,
    }),
    setModal: (state, { payload }) => ({
      ...state,
      infoModal: { isActiveModal: payload.isActiveModal, formModal: payload.formModal },
    }),
    setAuthToken: (state, { payload }) => ({
      ...state,
      authToken: payload,
    }),
  },
});

export default infoUserSlice.reducer;

export const {
  addFavoriteCountry,
  setAuthentication,
  setModal,
  setUserName,
  removeFavoriteCountry,
  clearAllFavoriteCountry,
  setAuthToken,
} = infoUserSlice.actions;
