import { createSlice } from '@reduxjs/toolkit';
import { IUserSlice } from './types';

export const infoUserSlice = createSlice({
  name: 'infoUser',
  initialState: {
    userName: '',
    listFavoriteCountries: [],
    isAuthentication: false,
    isActiveModal: false,
  } as IUserSlice,
  reducers: {
    addFavoriteCountry: (state, { payload }) => ({
      ...state,
      listFavoriteCountries: Array.from(new Set([...state.listFavoriteCountries, ...payload])),
    }),
    removeFavoriteCountry: (state, { payload }) => {
      const newListFavoriteCountries = state.listFavoriteCountries.filter(
        (item: string) => payload !== item,
      );
      return {
        ...state,
        listFavoriteCountries: newListFavoriteCountries,
      };
    },
    setUserName: (state, { payload }) => ({
      ...state,
      userName: payload,
    }),
    setAuthentication: (state, { payload }) => ({
      ...state,
      isAuthentication: payload,
    }),
    setActiveModal: (state, { payload }) => ({
      ...state,
      isActiveModal: payload,
    }),
  },
});

export default infoUserSlice.reducer;

export const {
  addFavoriteCountry,
  setAuthentication,
  setActiveModal,
  setUserName,
  removeFavoriteCountry,
} = infoUserSlice.actions;
