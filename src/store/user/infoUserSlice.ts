import { createSlice } from '@reduxjs/toolkit';
import { IUserSlice } from './types';

export const infoUserSlice = createSlice({
  name: 'infoUser',
  initialState: {
    listFavoriteCountries: [],
    isAuthentication: false,
    isActiveModal: false,
  } as IUserSlice,
  reducers: {
    addFavoriteCountry: (state, { payload }) => ({
      ...state,
      listFavoriteCountries: Array.from(new Set([...state.listFavoriteCountries, payload])),
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

export const { addFavoriteCountry, setAuthentication, setActiveModal } = infoUserSlice.actions;
