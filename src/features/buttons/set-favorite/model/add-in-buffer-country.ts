import { useDispatch } from 'react-redux';
import { setCountryBuffer, setModal } from '../../../../entities/viewer/model/user/infoUserSlice';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

export const handleAddInBufferCountry = (
  fullInfoCountry: {
    nameCountry: string;
    nameCapital: string;
    currencies: string;
    region: string;
    languages: string;
    population: string;
    flags: string;
    flagsAlt: string;
    coatOfArms: string;
  },
  e: React.SyntheticEvent,
  dispatch: Dispatch<AnyAction>,
) => {
  e.stopPropagation();
  dispatch(setCountryBuffer(fullInfoCountry));
  dispatch(setModal({ isActiveModal: true, formModal: 'login' }));
};
