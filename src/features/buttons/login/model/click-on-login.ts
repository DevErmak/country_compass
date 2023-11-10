import { useDispatch } from 'react-redux';
import { setModal } from '../../../../entities/viewer/model/user/infoUserSlice';
import { formModal } from '../../../../entities/viewer/model/user/types';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

export const ClickOnLogin = (dispatch: Dispatch<AnyAction>) => {
  dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
};
