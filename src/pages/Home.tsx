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

  // let myuuid = uuidv4();

  // const genCardId = useId();

  const [isFetchListCountry, setIsFetchListCountry] = useState(false);

  useEffect(() => {
    dispatch(getListCountriesFetch());
  }, []);

  const isLoading = useSelector(getIsLoading);
  const listCountry = useSelector(getListCountry);
  const infoErrorResponse = useSelector(getInfoErrorResponse);
  console.log('---------------->infoErrorResponse', infoErrorResponse);

  // const listFavoriteCountries = useSelector(getListFavoriteCountries);

  // const isFullInfoCountry = useSelector(getIsFullInfoCountry);
  // if (isFullInfoCountry) {
  //   return <Navigate to="/full-info-country" />;
  // }

  console.log('---------------->isLoading', isLoading);
  console.log('---------------->listCountry', listCountry);
  // debugger;
  // if (listCountry === undefined) setIsFetchListCountry(!isFetchListCountry);
  // else {
  //   if (Object.keys(listCountry as Array<IListCountries>).length === 0)
  //     setIsFetchListCountry(!isFetchListCountry);
  //   else
  if (infoErrorResponse.trim().length === 0) {
    // if (
    //   listCountry !== undefined &&
    //   Object.keys(listCountry as Array<IListCountries>).length === 0
    // ) {
    //   console.log('---------------->isLoading', isLoading);
    if (isLoading) {
      // setIsFetchListCountry(true);
      return <Loader />;
    } else {
      // setIsFetchListCountry(false);
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
      //   }
    }
  } else return <ErrorFetch infoError={infoErrorResponse} />;
  // }
}
