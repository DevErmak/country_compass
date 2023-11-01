import { useEffect, useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getListCountriesFetch } from '../store/country/infoCountrySlice';
import { useSelector } from 'react-redux';
import {
  getListCountry,
  getIsLoading,
  getInfoErrorResponse,
} from '../store/country/countriesSelectors';
import CountryCard from '../components/CountryCard/СountryСard';
import SelectorCountry from '../components/SelectorCountry/SelectorCountry';

import './home.css';
import Loader from '../components/Loader/Loader';
import ErrorFetch from '../components/ErrorFetch/ErrorFetch';
import { IListCountries } from '../store/country/typesIListCountries';
import { useLazyQuery } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { addFavoriteCountry } from '../store/user/infoUserSlice';
import { GET_FAVOURITECOUNTRIES } from '../api/graphqlV1/requests';

type Props = {};

export default function HomeContainer({}: Props) {
  const dispatch = useDispatch();
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
    dispatch(getListCountriesFetch());
    getFavoriteCountry();
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
            {(listCountry as Array<IListCountries>).map((country: any) => {
              let currentInfoCountry = {
                nameCountry: country.name.official,
                nameCapital: country.capital.join(', '),
                currencies: Object.keys(country.currencies).join(', '),
                region: country.region,
                languages: Object.keys(country.languages).join(', '),
                population: country.population
                  .toString()
                  .replace(/,/g, '')
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
                flags: country.flags.svg,
                flagsAlt: country.flags.alt,
                coatOfArms: country.coatOfArms.svg,
              };
              return (
                <CountryCard key={country.name.official} currentInfoCountry={currentInfoCountry} />
              );
            })}
          </div>
        </div>
      );
    }
  } else return <ErrorFetch infoError={infoErrorResponse} />;
}
