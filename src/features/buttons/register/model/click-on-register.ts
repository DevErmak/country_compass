import { formModal } from '../../../../entities/viewer/model/user/types';
import { setModal } from '../../../../entities/viewer/model/user/infoUserSlice';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

export const ClickOnRegister = (dispatch: Dispatch<AnyAction>) => {
  dispatch(setModal({ isActiveModal: true, formModal: formModal.register }));
};
