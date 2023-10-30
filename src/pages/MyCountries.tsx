import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getListCountry, getInfoErrorResponse } from '../store/country/countriesSelectors';
import { Navigate, useNavigate } from 'react-router-dom';
import CountryCard from '../components/CountryCard/СountryСard';

import './home.css';
import { getIsAuthentication, getListFavoriteCountries } from '../store/user/userSelectors';
import { setModal } from '../store/user/infoUserSlice';
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
  const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);
  const { loading, error, data } = useQuery(GET_FAVOURITECOUNTRIES, {
    context: {
      headers: {
        ...Headers,
        authorization: `Bearer ${cookie.accessToken}`,
      },
    },
    errorPolicy: 'all',
  });

  console.log('qwe---------------->error', error);

  console.log('---------------->asssd');

  // const listFavoriteCountry = useSelector(getListFavoriteCountries);
  const [listFavoriteCountry, setListFavoriteCountry] = useState([]);
  // getFavoriteCountry({
  //   context: {
  //     headers: {
  //       ...Headers,
  //       authorization: `Bearer ${cookie.accessToken}`,
  //     },
  //   },
  // });
  useEffect(() => {
    if (data.getMe.FavoriteCountry) {
      console.log('---------------->data', data);
      setListFavoriteCountry(data.getMe.FavoriteCountry);
    }
  }, [data]);

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
    return (
      <div className="container-countries-cards">
        {listFavoriteCountry.map((infoCountry: any, i: any) => (
          <CountryCard key={i} currentInfoCountry={infoCountry} />
        ))}
      </div>
    );
  }
}
