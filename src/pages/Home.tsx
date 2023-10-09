import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListCountriesFetch } from '../store/country/infoCountrySlice';
import { useSelector } from 'react-redux';
import { getListCountry, isFullInfoCountry } from '../store/country/countriesSelectors';
import { Navigate } from 'react-router-dom';
import CountryCard from '../components/country-card/СountryСard';
import SelectorCountry from '../components/SelectorCountry/SelectorCountry';

import './home.css';
import { getIsAuthentication, getListFavoriteCountries } from '../store/user/userSelectors';

type Props = {};

export default function HomeContainer({}: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListCountriesFetch());
  }, []);

  const listCountry = useSelector(getListCountry);
  const listFavoriteCountries = useSelector(getListFavoriteCountries);

  const ff = useSelector(isFullInfoCountry);
  if (ff) {
    return <Navigate to="/full-info-country" />;
  }

  return (
    <>
      <SelectorCountry />
      <div className="container-countries-cards">
        {listCountry.map((country) => (
          <CountryCard
            key={country.name.official}
            flags={country.flags.svg}
            flagsAlt={country.flags.alt}
            nameCountry={country.name.official}
            nameCapital={country.capital.join(', ')}
            isFavorite={(() => {
              console.log('---------------->listFavoriteCountries', listFavoriteCountries);
              console.log('---------------->co', country.name.official);
              const test = listFavoriteCountries.includes(country.name.official);
              console.log(
                '---------------->listFavoriteCountries.includes(country.name.official)',
                test,
              );
              debugger;
              return test;
            })()}
          />
        ))}
      </div>
    </>
  );
}
