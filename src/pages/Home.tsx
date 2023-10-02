import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListCountriesFetch } from '../store/country/infoCountrySlice';
import { useSelector } from 'react-redux';
import {
  getFullInfoCountry,
  getListCountry,
  isFullInfoCountry,
} from '../store/country/countriesSelectors';
import { Navigate } from 'react-router-dom';
import CountryCard from '../components/country-card/СountryСard';

// import { getFullInfoCountry } from '../store/country/countriesSelectors';

type Props = {};

export default function HomeContainer({}: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListCountriesFetch());
  }, []);

  const listCountry = useSelector(getListCountry);
  console.log('---------------->listCountry', listCountry);

  const ff = useSelector(isFullInfoCountry);

  if (ff) {
    return <Navigate to="/full-info-country" />;
  }
  const getCapital = (capital: any, separator: string): string => {
    // const properties = capital.map((item: string) => item);
    return capital.join(separator);
  };
  console.log(
    '---------------->listCountry.map((country) => getCapital(country.capital, ',
    '));',
    listCountry.map((country) => country.capital),
  );
  return (
    <div>
      {listCountry.map((country) => (
        <CountryCard
          key={country.id}
          flags={country.flags.svg}
          flagsAlt={country.flags.alt}
          isFavorites={false}
          nameCountry={country.name.official}
          nameCapital={getCapital(country.capital, ', ')}
        />
      ))}
    </div>
  );
}
