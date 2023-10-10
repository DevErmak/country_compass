import React from 'react';
import { getIsAuthentication, getListFavoriteCountries } from '../../store/user/userSelectors';
import { useSelector } from 'react-redux';
import {
  addFavoriteCountry,
  removeFavoriteCountry,
  setModal,
} from '../../store/user/infoUserSlice';
import { useDispatch } from 'react-redux';

import { BsFillStarFill } from 'react-icons/bs';

import { BsStar } from 'react-icons/bs';

type Props = { nameCountry: string };

export default function BtnFavoriteInfoCountry({ nameCountry }: Props) {
  const dispatch = useDispatch();
  const listFavoriteCountries = useSelector(getListFavoriteCountries);
  const isLogin = useSelector(getIsAuthentication);

  const handleAddFavoriteCountry = (nameCountry: string[], e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch(addFavoriteCountry(nameCountry));
  };

  const handleRemoveFavoriteCountry = (nameCountry: string[], e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch(removeFavoriteCountry(nameCountry));
  };

  const handleGoFormLogin = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch(setModal({ isActiveModal: true, formModal: 'login' }));
  };

  if (isLogin) {
    if (listFavoriteCountries.includes(nameCountry))
      return (
        <BsFillStarFill
          className="star-favorites"
          onClick={(e) => handleRemoveFavoriteCountry([nameCountry], e)}
        />
      );
    else
      return (
        <BsStar className="star" onClick={(e) => handleAddFavoriteCountry([nameCountry], e)} />
      );
  } else {
    return <BsStar className="star" onClick={(e) => handleGoFormLogin(e)} />;
  }
}
