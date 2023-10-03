import { createSlice } from '@reduxjs/toolkit';
import { IUserSlice } from './types';

type PayloadType = {
  data: string;
};

export const infoCountriesSlice = createSlice({
  name: 'infoUser',
  initialState: {
    listFavoriteCountries: undefined,
    isAuthentication: false,
  } as IUserSlice,
  reducers: {
    logInUser: (state) => ({
      ...state,
      isAuthentication: true,
    }),
    addFavoriteCountry: (state, { payload }: { payload: PayloadType }) => ({
      ...state,
      listFavoriteCountries: Array.from(
        new Set([...(state.listFavoriteCountries || []), payload.data]),
      ),
    }),
    logOutUser: (state) => ({
      ...state,
      isAuthentication: false,
    }),
  },
});

export default infoCountriesSlice.reducer;

export const { logInUser, addFavoriteCountry, logOutUser } = infoCountriesSlice.actions;
