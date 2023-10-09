import React from 'react';
import { getIsAuthentication, getListFavoriteCountries } from '../../store/user/userSelectors';
import { useSelector } from 'react-redux';
import { ReactComponent as Star } from '../../static/images/star.svg';
import { ReactComponent as StarFavorites } from '../../static/images/star-favorites.svg';
import {
  addFavoriteCountry,
  removeFavoriteCountry,
  setActiveModal,
} from '../../store/user/infoUserSlice';
import { AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { string } from 'zod';
type Props = { nameCountry: string; isFavorite: boolean };

export default function BtnFavorite({ nameCountry, isFavorite }: Props) {
  const dispatch = useDispatch();

  const onClickStar = (
    param: string | boolean,
    dispatchCountry: (param: string | boolean) => AnyAction,
    e: React.SyntheticEvent,
  ) => {
    e.stopPropagation();
    dispatch(dispatchCountry(param));
  };

  const handleAddFavoriteCountry = (nameCountry: string[], e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch(addFavoriteCountry(nameCountry));
  };

  // const listFavoriteCountries = useSelector(getListFavoriteCountries);

  const isLogin = useSelector(getIsAuthentication);

  console.log('!!!---------------->isLogin', isLogin);
  // console.log(
  //   '---------------->listFavoriteCountries.includes(nameCountry)',
  //   listFavoriteCountries.includes(nameCountry),
  // );
  console.log('---------------->isFavorite', isFavorite);

  // if (isLogin) {
  if (isFavorite)
    return (
      <StarFavorites
        className="star-card-favorites"
        onClick={(e) => onClickStar(nameCountry, removeFavoriteCountry, e)}
      />
    );
  else
    return (
      <Star className="star-card" onClick={(e) => handleAddFavoriteCountry([nameCountry], e)} />
    );
  // } else {
  // return <Star className="star-card" onClick={(e) => onClickStar(true, setActiveModal, e)} />;
  // }
}
