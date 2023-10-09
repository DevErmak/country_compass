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
import { setActiveModal } from '../store/user/infoUserSlice';

// import { getFullInfoCountry } from '../store/country/countriesSelectors';

type Props = {};

export default function HomeContainer({}: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListCountriesFetch());
  }, []);

  const listFavoriteCountry = useSelector(getListFavoriteCountries);
  console.log('---------------->listfavoriteinsitefavoriteCountry', listFavoriteCountry);

  const isAuth = useSelector(getIsAuthentication);
  console.log('---------------->isAuth', isAuth);
  if (!isAuth) {
    dispatch(setActiveModal(true));
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="container-countries-cards">
        {/* {listCountry.map((country) => (
          <CountryCard
            key={country.name.official}
            flags={country.flags.svg}
            flagsAlt={country.flags.alt}
            isFavorites={false}
            nameCountry={country.name.official}
            nameCapital={country.capital.join(', ')}
          />
        ))} */}
        list favoryte
      </div>
    </>
  );
}
