import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './home.scss';
import { Navigate } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { GET_FAVORITECOUNTRIES } from '@/shared/api/graphqlV1';
import { addFavoriteCountry } from '@/entities/viewer/model/user/infoUserSlice';
import { getListCountriesFetch } from '@/entities/country/model/country/infoCountrySlice';
import {
  getInfoErrorResponse,
  getIsFullInfoCountry,
  getIsLoading,
  getListCountry,
} from '@/entities/country/model/country/countriesSelectors';
import SelectorCountry from '@/features/selector-country';
import ListCountryCard from '@/widgets/list-сountry-сard';
import ErrorGetDataCountries from '@/widgets/error-get-data-countries';
import Loader from '@/shared/ui/loader';

type Props = {};

export default function Home({}: Props) {
  const dispatch = useDispatch();
  const [cookie] = useCookies(['accessToken']);

  const [getFavoriteCountry, { loading, error, data }] = useLazyQuery(GET_FAVORITECOUNTRIES, {
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
  const isFullInfoCountry = useSelector(getIsFullInfoCountry);

  // if (isFullInfoCountry) {
  //   return <Navigate to="full-info-country" />;
  // }
  if (infoErrorResponse.trim().length === 0) {
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <div className="home-container">
          <div className="search">
            <SelectorCountry />
          </div>
          <ListCountryCard listCountry={listCountry} />
        </div>
      );
    }
  } else return <ErrorGetDataCountries infoError={infoErrorResponse} />;
}
