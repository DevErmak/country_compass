import { useEffect, useId } from 'react';
import { useDispatch } from 'react-redux';
import { getListCountriesFetch } from '../store/country/infoCountrySlice';
import { useSelector } from 'react-redux';
import {
  getListCountry,
  getIsFullInfoCountry,
  getIsLoading,
} from '../store/country/countriesSelectors';
import { Navigate } from 'react-router-dom';
import CountryCard from '../components/country-card/СountryСard';
import SelectorCountry from '../components/SelectorCountry/SelectorCountry';
import { V4Options, v4 as uuidv4 } from 'uuid';

import './home.css';
import { getIsAuthentication, getListFavoriteCountries } from '../store/user/userSelectors';
import Loader from '../components/loader/Loader';

type Props = {};

export default function HomeContainer({}: Props) {
  const dispatch = useDispatch();

  // let myuuid = uuidv4();

  // const genCardId = useId();

  useEffect(() => {
    dispatch(getListCountriesFetch());
  }, []);

  const isLoading = useSelector(getIsLoading);
  const listCountry = useSelector(getListCountry);
  // const listFavoriteCountries = useSelector(getListFavoriteCountries);

  // const isFullInfoCountry = useSelector(getIsFullInfoCountry);
  // if (isFullInfoCountry) {
  //   return <Navigate to="/full-info-country" />;
  // }

  console.log('---------------->isLoading', isLoading);
  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="home-container">
        <div className="search">
          <SelectorCountry />
        </div>
        <div className="container-countries-cards">
          {listCountry.map((country) => (
            <CountryCard
              key={country.name.official}
              flags={country.flags.svg}
              flagsAlt={country.flags.alt}
              nameCountry={country.name.official}
              nameCapital={country.capital.join(', ')}
            />
          ))}
        </div>
      </div>
    );
  }
}
