import { NavigateFunction } from 'react-router-dom';
import { getFullInfoCountryClear } from '../../../../entities/country/model/country/infoCountrySlice';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

export const ClickOnGoHome = (dispatch: Dispatch<AnyAction>, navigate: NavigateFunction) => {
  dispatch(getFullInfoCountryClear());
  navigate('/');
};
