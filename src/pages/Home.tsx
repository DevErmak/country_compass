import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListCountriesFetch } from '../store/country/infoCountrySlice';
import { useSelector } from 'react-redux';
import { getFullInfoCountry, isFullInfoCountry } from '../store/country/countriesSelectors';
import { Navigate } from 'react-router-dom';
// import { getFullInfoCountry } from '../store/country/countriesSelectors';

type Props = {};

export default function HomeContainer({}: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListCountriesFetch());
  }, []);

  const ff = useSelector(isFullInfoCountry);

  if (ff) {
    return <Navigate to="/full-info-country" />;
  }

  return <div></div>;
}
