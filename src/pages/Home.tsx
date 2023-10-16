import { useEffect, useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getListCountriesFetch } from '../store/country/infoCountrySlice';
import { useSelector } from 'react-redux';
import {
  getListCountry,
  getIsFullInfoCountry,
  getIsLoading,
  getInfoErrorResponse,
} from '../store/country/countriesSelectors';
import { Navigate } from 'react-router-dom';
import CountryCard from '../components/CountryCard/СountryСard';
import SelectorCountry from '../components/SelectorCountry/SelectorCountry';
import { V4Options, v4 as uuidv4 } from 'uuid';

import './home.css';
import { getIsAuthentication, getListFavoriteCountries } from '../store/user/userSelectors';
import Loader from '../components/Loader/Loader';
import axios from 'axios';
import ErrorFetch from '../components/ErrorFetch/ErrorFetch';
import { IListCountries } from '../store/country/typesIListCountries';

type Props = {};

export default function HomeContainer({}: Props) {
  const dispatch = useDispatch();

  const [isFetchListCountry, setIsFetchListCountry] = useState(false);

  useEffect(() => {
    dispatch(getListCountriesFetch());
  }, []);

  const isLoading = useSelector(getIsLoading);
  const listCountry = useSelector(getListCountry);
  const infoErrorResponse = useSelector(getInfoErrorResponse);

  if (infoErrorResponse.trim().length === 0) {
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <div className="home-container">
          <div className="search">
            <SelectorCountry />
          </div>
          <div className="container-countries-cards">
            {(listCountry as Array<IListCountries>).map((country: any) => (
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
  } else return <ErrorFetch infoError={infoErrorResponse} />;
}
