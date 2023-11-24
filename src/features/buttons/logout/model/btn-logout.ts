import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import {
  clearAllFavoriteCountry,
  setAuthentication,
  setModal,
} from '../../../../entities/viewer/model/user/infoUserSlice';
import { formModal } from '../../../../entities/viewer/model/user/types';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

export const clickOnLogout = (
  dispatch: Dispatch<AnyAction>,
  removeCookie: (name: 'accessToken') => void,
) => {
  dispatch(clearAllFavoriteCountry());
  removeCookie('accessToken');
  dispatch(setAuthentication(false));
  dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
};
