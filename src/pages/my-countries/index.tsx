import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getInfoErrorResponse } from '../../store/country/countriesSelectors';
import { Navigate, useNavigate } from 'react-router-dom';
import CountryCard from '../../entities/country/description-country';

import './home.css';
import { getIsAuthentication, getListFavoriteCountries } from '../../store/user/userSelectors';
import { addFavoriteCountry, setModal } from '../../store/user/infoUserSlice';
import { formModal } from '../../store/user/types';
import { useLazyQuery } from '@apollo/client';
import { GET_FAVOURITECOUNTRIES } from '../../shared/api/graphqlV1';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

type Props = {};

export default function MyCountries({}: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        dispatch(addFavoriteCountry(data.getMe.FavoriteCountry));
      }
    }
  }, [data]);

  useEffect(() => {
    getFavoriteCountry();
  }, []);

  const listFavoriteCountry = useSelector(getListFavoriteCountries);

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
      <div className="favorite-container">
        <div className="container-countries-cards">
          {listFavoriteCountry.map((infoCountry: any, i: any) => {
            return <CountryCard key={i} currentInfoCountry={infoCountry} />;
          })}
        </div>
      </div>
    );
  }
}
