import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListCountriesFetch } from '../store/country/infoCountrySlice';
// import { getFullInfoCountry } from '../store/country/countriesSelectors';

type Props = {};

export default function HomeContainer({}: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListCountriesFetch());
  }, []);

  return <div></div>;
}
