import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListCountriesFetch } from '../store/country/infoCountrySlice';
import { useSelector } from 'react-redux';
import { getListCountry, isFullInfoCountry } from '../store/country/countriesSelectors';
import { Navigate } from 'react-router-dom';
import CountryCard from '../components/country-card/СountryСard';
import SelectorCountry from '../components/SelectorCountry/SelectorCountry';
import Modal from '../components/modal/Modal';

import './home.css';

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

  return (
    <>
      <SelectorCountry />
      <div className="container-countries-cards">
        {listCountry.map((country) => (
          <CountryCard
            key={country.name.official}
            flags={country.flags.svg}
            flagsAlt={country.flags.alt}
            isFavorites={false}
            nameCountry={country.name.official}
            nameCapital={country.capital.join(', ')}
          />
        ))}
      </div>
    </>
  );
}
