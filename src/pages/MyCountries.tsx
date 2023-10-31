import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getListCountry, getInfoErrorResponse } from '../store/country/countriesSelectors';
import { Navigate, useNavigate } from 'react-router-dom';
import CountryCard from '../components/CountryCard/СountryСard';

import './home.css';
import { getIsAuthentication, getListFavoriteCountries } from '../store/user/userSelectors';
import { addFavoriteCountry, setModal } from '../store/user/infoUserSlice';
import { formModal } from '../store/user/types';
import { IListCountries } from '../store/country/typesIListCountries';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { GET_FAVOURITECOUNTRIES } from '../api/graphqlV1/requests';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';

type Props = {};

export default function HomeContainer({}: Props) {
  console.log('---------------->asd');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [listCurrentInfoFavoriteCountry, setListCurrentInfoFavoriteCountry] = useState([]);
  const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);

  const [getFavoriteCountry, { loading, error, data }] = useLazyQuery(GET_FAVOURITECOUNTRIES, {
    context: {
      headers: {
        ...Headers,
        authorization: `Bearer ${cookie.accessToken}`,
      },
    },
    // fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  });
  useEffect(() => {
    if (data) {
      if (data.getMe.FavoriteCountry) {
        // const listNameFavoriteCountry = data.getMe.FavoriteCountry.map(
        //   (favoriteCountry: any) => favoriteCountry.nameCountry,
        // );
        console.log('!!---------------->data.getMe.FavoriteCountry', data.getMe.FavoriteCountry);
        dispatch(addFavoriteCountry(data.getMe.FavoriteCountry));
      }
    }
  }, [data]);

  useEffect(() => {
    getFavoriteCountry();
  }, []);

  // const { loading, error, data } = useQuery(GET_FAVOURITECOUNTRIES, {
  //   context: {
  //     headers: {
  //       ...Headers,
  //       authorization: `Bearer ${cookie.accessToken}`,
  //     },
  //   },
  //   errorPolicy: 'all',
  // });

  // const [getFavoriteCountry, { loading, error, data }] = useLazyQuery(GET_FAVOURITECOUNTRIES, {
  //   context: {
  //     headers: {
  //       ...Headers,
  //       authorization: `Bearer ${cookie.accessToken}`,
  //     },
  //   },
  //   errorPolicy: 'all',
  // });
  // useEffect(() => {
  //   console.log('---------------->data', data);
  //   if (data) {
  //     if (data.getMe.FavoriteCountry) {
  //       // const listNameFavoriteCountry = data.getMe.FavoriteCountry.map(
  //       //   (favoriteCountry: any) => favoriteCountry.nameCountry,
  //       // );
  //       console.log('11---------------->data.getMe.FavoriteCountry', data.getMe.FavoriteCountry);
  //       dispatch(addFavoriteCountry(data.getMe.FavoriteCountry));
  //     }
  //   }
  // }, [data]);

  // useEffect(() => {
  //   console.log('!!!!---------------->qweqweqweqwe');
  //   getFavoriteCountry();
  // }, []);

  // console.log('qwe---------------->error', error);

  console.log('---------------->asssd');

  const listFavoriteCountry = useSelector(getListFavoriteCountries);
  // const [listFavoriteCountry, setListFavoriteCountry] = useState([]);
  // getFavoriteCountry({
  //   context: {
  //     headers: {
  //       ...Headers,
  //       authorization: `Bearer ${cookie.accessToken}`,
  //     },
  //   },
  // });
  // useEffect(() => {
  //   if (data) {
  //     console.log('datachange');
  //     console.log('---------------->data.getMe.FavoriteCountry', data.getMe.FavoriteCountry);
  //     // if (data.getMe.FavoriteCountry) {
  //     //   const listInfoFavoriteCountry = data.getMe.FavoriteCountry.map((favoriteCountry: any) => ({
  //     //     nameCountry: favoriteCountry.nameCountry,
  //     //     nameCapital: favoriteCountry.nameCapital,
  //     //     currencies: favoriteCountry.currencies,
  //     //     region: favoriteCountry.region,
  //     //     languages: favoriteCountry.languages,
  //     //     population: favoriteCountry.population,
  //     //     flags: favoriteCountry.flags,
  //     //     flagsAlt: favoriteCountry.flagsAlt,
  //     //     coatOfArms: favoriteCountry.coatOfArms,
  //     //   }));
  //     //   setListCurrentInfoFavoriteCountry(listInfoFavoriteCountry);
  //     // }
  //   }
  // }, [data]);

  console.log('---------------->listFavoriteCountry', listFavoriteCountry);
  // const listCountry = useSelector(getListCountry);s
  const infoErrorResponse = useSelector(getInfoErrorResponse);

  const isAuth = useSelector(getIsAuthentication);
  if (!isAuth) {
    dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
    return <Navigate to="/" />;
  }

  if (infoErrorResponse.trim().length !== 0) {
    return <Navigate to="/" />;
  }

  if (Object.keys(listFavoriteCountry).length === 0) {
    return (
      <div className="empty-favorite-container">
        <div className="info-about-empty-favorite">
          <div>The list of favorite countries is empty.</div>
          <div className="choose-country" onClick={() => navigate('/')}>
            Choose a country
          </div>
        </div>
      </div>
    );
  } else {
    // console.log('111---------------->data.getMe.FavoriteCountry', data.getMe.FavoriteCountry);
    return (
      <div className="container-countries-cards">
        {listFavoriteCountry.map((infoCountry: any, i: any) => {
          console.log('qweasd---------------->infoCountry', infoCountry);
          return <CountryCard key={i} currentInfoCountry={infoCountry} />;
        })}
      </div>
    );
  }
}
