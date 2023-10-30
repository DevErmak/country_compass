import React, { useEffect } from 'react';
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
import { useMutation } from '@apollo/client';
import { DELETE_FAVOURITECOUNTRIES, SET_FAVOURITECOUNTRIES } from '../../api/graphqlV1/requests';
import { getFullInfoCountry } from '../../store/country/countriesSelectors';
import { useCookies } from 'react-cookie';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import './btn-set-favorite.css';

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
    if (errorSetFavoriteCountry) {
      console.log('---------------->errorSetFavoriteCountry', errorSetFavoriteCountry);
      toast.error('the country was not added', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Zoom,
      });
    }
  }, [errorSetFavoriteCountry]);

  useEffect(() => {
    if (errorDeleteFavoriteCountry) {
      console.log('---------------->errorDeleteFavoriteCountry', errorDeleteFavoriteCountry);
      toast.error('the country has not been deleted', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Zoom,
      });
    }
  }, [errorDeleteFavoriteCountry]);

  useEffect(() => {
    if (dataSetFavoriteCountry) {
      console.log('---------------->dataSetFavoriteCountry', dataSetFavoriteCountry);
      dispatch(addFavoriteCountry([dataSetFavoriteCountry.CreateFavoriteCountry.nameCountry]));
    }
  }, [dataSetFavoriteCountry]);

  useEffect(() => {
    if (dataDeleteFavoriteCountry) {
      console.log('---------------->dataDeleteFavoriteCountry', dataDeleteFavoriteCountry);
      dispatch(removeFavoriteCountry([dataDeleteFavoriteCountry.DeleteFavoriteCountry]));
    }
  }, [dataDeleteFavoriteCountry]);

  const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);

  const handleAddFavoriteCountry = (nameCountry: string[], e: React.SyntheticEvent) => {
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

  const handleRemoveFavoriteCountry = (nameCountry: string[], e: React.SyntheticEvent) => {
    e.stopPropagation();
    // dispatch(removeFavoriteCountry(nameCountry));
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
    // console.log(
    //   '---------------->listFavoriteCountries.includes(fullInfoCountry.nameCountry)',
    //   listFavoriteCountries.includes(fullInfoCountry.nameCountry),
    // );
    if (listFavoriteCountries.includes(fullInfoCountry.nameCountry))
      return (
        <>
          <ToastContainer />
          <BsFillStarFill
            className={modCard !== 'card' ? 'star-favorites' : 'star-card-favorites'}
            onClick={(e) => handleRemoveFavoriteCountry([fullInfoCountry.nameCountry], e)}
          />
        </>
      );
    else
      return (
        <>
          <ToastContainer />
          <BsStar
            className={modCard !== 'card' ? 'star' : 'star-card'}
            onClick={(e) => handleAddFavoriteCountry([fullInfoCountry.nameCountry], e)}
          />
        </>
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
