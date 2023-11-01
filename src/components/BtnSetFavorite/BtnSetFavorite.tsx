import React, { useEffect } from 'react';
import { getIsAuthentication, getListFavoriteCountries } from '../../store/user/userSelectors';
import { useSelector } from 'react-redux';
import {
  addFavoriteCountry,
  clearAllFavoriteCountry,
  removeFavoriteCountry,
  setAuthentication,
  setModal,
} from '../../store/user/infoUserSlice';
import { useDispatch } from 'react-redux';

import { BsFillStarFill } from 'react-icons/bs';

import { BsStar } from 'react-icons/bs';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import {
  DELETE_FAVOURITECOUNTRIES,
  GET_FAVOURITECOUNTRIES,
  SET_FAVOURITECOUNTRIES,
} from '../../api/graphqlV1/requests';
import { getFullInfoCountry } from '../../store/country/countriesSelectors';
import { useCookies } from 'react-cookie';
import { Zoom, toast } from 'react-toastify';
import './btn-set-favorite.css';
import { formModal } from '../../store/user/types';

type Props = {
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
  };
  modCard: string;
};

export default function BtnSetFavorite({ fullInfoCountry, modCard }: Props) {
  const dispatch = useDispatch();
  const listFavoriteCountries = useSelector(getListFavoriteCountries);
  const isLogin = useSelector(getIsAuthentication);
  const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);

  const [getFavoriteCountry, { loading, error, data }] = useLazyQuery(GET_FAVOURITECOUNTRIES, {
    context: {
      headers: {
        ...Headers,
        authorization: `Bearer ${cookie.accessToken}`,
      },
    },
    errorPolicy: 'all',
  });
  useEffect(() => {
    if (data) {
      if (data.getMe.FavoriteCountry) {
        console.log('!!---------------->data.getMe.FavoriteCountry', data.getMe.FavoriteCountry);
        dispatch(addFavoriteCountry(data.getMe.FavoriteCountry));
      }
    }
  }, [data]);
  useEffect(() => {
    switch (error?.message) {
      case 'Cannot return null for non-nullable field Query.getMe.':
        dispatch(clearAllFavoriteCountry());
        removeCookie('accessToken');
        dispatch(setAuthentication(false));
        dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
        break;
      case 'relation "country" does not exist':
        dispatch(clearAllFavoriteCountry());
        removeCookie('accessToken');
        dispatch(setAuthentication(false));
        dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
        break;
    }
  }, [error]);

  const [
    setFavoriteCountry,
    {
      data: dataSetFavoriteCountry,
      loading: loadingSetFavoriteCountry,
      error: errorSetFavoriteCountry,
    },
  ] = useMutation(SET_FAVOURITECOUNTRIES, {
    errorPolicy: 'all',
  });
  const [
    deleteFavoriteCountry,
    {
      data: dataDeleteFavoriteCountry,
      loading: loadingDeleteFavoriteCountry,
      error: errorDeleteFavoriteCountry,
    },
  ] = useMutation(DELETE_FAVOURITECOUNTRIES, {
    errorPolicy: 'all',
  });

  useEffect(() => {
    switch (errorSetFavoriteCountry?.message) {
      case 'relation "country" does not exist':
        dispatch(clearAllFavoriteCountry());
        removeCookie('accessToken');
        dispatch(setAuthentication(false));
        dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
        break;
      case 'User not found':
        dispatch(clearAllFavoriteCountry());
        removeCookie('accessToken');
        dispatch(setAuthentication(false));
        dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
        break;
    }
  }, [errorSetFavoriteCountry]);

  useEffect(() => {
    switch (errorDeleteFavoriteCountry?.message) {
      case 'relation "country" does not exist':
        dispatch(clearAllFavoriteCountry());
        removeCookie('accessToken');
        dispatch(setAuthentication(false));
        dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
        break;
      case 'User not found':
        dispatch(clearAllFavoriteCountry());
        removeCookie('accessToken');
        dispatch(setAuthentication(false));
        dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
        break;
    }
  }, [errorDeleteFavoriteCountry]);

  useEffect(() => {
    if (dataSetFavoriteCountry) {
      console.log('---------------->dataSetFavoriteCountry', dataSetFavoriteCountry);
      // dispatch(addFavoriteCountry(dataSetFavoriteCountry.CreateFavoriteCountry));
      getFavoriteCountry();
    }
  }, [dataSetFavoriteCountry]);

  useEffect(() => {
    if (dataDeleteFavoriteCountry) {
      console.log('---------------->dataDeleteFavoriteCountry', dataDeleteFavoriteCountry);
      getFavoriteCountry();
      // dispatch(removeFavoriteCountry(dataDeleteFavoriteCountry.DeleteFavoriteCountry));
    }
  }, [dataDeleteFavoriteCountry]);

  const handleAddFavoriteCountry = (nameCountry: string, e: React.SyntheticEvent) => {
    e.stopPropagation();
    // dispatch(addFavoriteCountry(nameCountry));
    setFavoriteCountry({
      context: {
        headers: {
          ...Headers,
          authorization: `Bearer ${cookie.accessToken}`,
        },
      },
      variables: {
        createFavoriteCountry: {
          coatOfArms: fullInfoCountry.coatOfArms,
          currencies: fullInfoCountry.currencies,
          flags: fullInfoCountry.flags,
          flagsAlt: fullInfoCountry.flagsAlt || '',
          languages: fullInfoCountry.languages,
          nameCapital: fullInfoCountry.nameCapital,
          nameCountry: fullInfoCountry.nameCountry,
          population: fullInfoCountry.population,
          region: fullInfoCountry.region,
        },
      },
    });
  };

  const handleRemoveFavoriteCountry = (nameCountry: string, e: React.SyntheticEvent) => {
    e.stopPropagation();
    // dispatch(removeFavoriteCountry(nameCountry));
    console.log('handleRemoveFavoriteCountry');
    deleteFavoriteCountry({
      context: {
        headers: {
          ...Headers,
          authorization: `Bearer ${cookie.accessToken}`,
        },
      },
      variables: {
        nameCountry: fullInfoCountry.nameCountry,
      },
    });
  };

  const handleGoFormLogin = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch(setModal({ isActiveModal: true, formModal: 'login' }));
  };

  if (isLogin) {
    console.log('123---------------->listFav123oriteCountries', listFavoriteCountries);
    // console.log(
    //   '---------------->listFavoriteCountries.includes(fullInfoCountry.nameCountry)',
    //   listFavoriteCountries.includes(fullInfoCountry.nameCountry),
    // );

    // if (listFavoriteCountries.includes(fullInfoCountry.nameCountry))
    if (
      listFavoriteCountries.find(
        (favoriteCountry) => fullInfoCountry.nameCountry === favoriteCountry.nameCountry,
      )
    )
      return (
        <BsFillStarFill
          className={modCard !== 'card' ? 'star-favorites' : 'star-card-favorites'}
          onClick={(e) => handleRemoveFavoriteCountry(fullInfoCountry.nameCountry, e)}
        />
      );
    else
      return (
        <BsStar
          className={modCard !== 'card' ? 'star' : 'star-card'}
          onClick={(e) => handleAddFavoriteCountry(fullInfoCountry.nameCountry, e)}
        />
      );
  } else {
    return (
      <BsStar
        className={modCard !== 'card' ? 'star' : 'star-card'}
        onClick={(e) => handleGoFormLogin(e)}
      />
    );
  }
}
