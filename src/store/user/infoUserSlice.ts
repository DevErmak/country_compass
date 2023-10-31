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
    addFavoriteCountry: (state, { payload }) => {
      // console.log('---------------->state.listFavoriteCountries', state.listFavoriteCountries);
      // const isHaveCountry = state.listFavoriteCountries.find((item) => {
      //   console.log('---------------->item', item.nameCountry);
      //   console.log('!!---------------->payload', payload.nameCountry);
      //   return item.nameCountry === payload.nameCountry;
      // });
      // console.log('---------------->isHaveCountry', isHaveCountry);
      // if (isHaveCountry) {
      //   console.log('---------------->noser');
      //   return {
      //     ...state,
      //   };
      // } else {
      //   console.log('---------------->ser');
      //   return {
      //     ...state,
      //     listFavoriteCountries: state.listFavoriteCountries.concat(payload),
      //   };
      // }
      return {
        ...state,
        listFavoriteCountries: payload,
      };
    },
    removeFavoriteCountry: (state, { payload }) => {
      const newListFavoriteCountries = state.listFavoriteCountries.filter(
        (item) => payload !== item.nameCountry,
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
