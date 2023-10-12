import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListCountriesFetch } from '../store/country/infoCountrySlice';
import { useSelector } from 'react-redux';
import {
  getListCountry,
  getIsFullInfoCountry,
  getInfoErrorResponse,
} from '../store/country/countriesSelectors';
import { Navigate, useNavigate } from 'react-router-dom';
import CountryCard from '../components/country-card/СountryСard';
import SelectorCountry from '../components/SelectorCountry/SelectorCountry';

import './home.css';
import { getIsAuthentication, getListFavoriteCountries } from '../store/user/userSelectors';
import { setModal } from '../store/user/infoUserSlice';
import { formModal } from '../store/user/types';
import { CountrySlice } from '../store/country/types';
import { IListCountries } from '../store/country/typesIListCountries';

// import { getFullInfoCountry } from '../store/country/countriesSelectors';

type Props = {};

export default function HomeContainer({}: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getListCountriesFetch());
  // }, []);

  const listFavoriteCountry = useSelector(getListFavoriteCountries);
  const listCountry = useSelector(getListCountry);
  // const isFullInfoCountry = useSelector(getIsFullInfoCountry);
  const infoErrorResponse = useSelector(getInfoErrorResponse);

  const isAuth = useSelector(getIsAuthentication);
  console.log('-asdw--------------->isAuth', isAuth);
  if (!isAuth) {
    dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
    return <Navigate to="/" />;
  }
  // if (isFullInfoCountry) {
  //   return <Navigate to="/full-info-country" />;
  // }

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
    let listFullInfoFavoriteCountry: IListCountries[] = [];

    listFavoriteCountry.map((nameFavoriteCountry) =>
      listFullInfoFavoriteCountry.push(
        listCountry.find(
          (country) => country.name.official === nameFavoriteCountry,
        ) as IListCountries,
      ),
    );

    return (
      <div className="container-countries-cards">
        {listFullInfoFavoriteCountry.map((country) => (
          <CountryCard
            key={country.name.official}
            flags={country.flags.svg}
            flagsAlt={country.flags.alt}
            nameCountry={country.name.official}
            nameCapital={country.capital.join(', ')}
          />
        ))}
      </div>
    );
  }
}
