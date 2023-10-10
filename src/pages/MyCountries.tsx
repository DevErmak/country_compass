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
import { setModal } from '../store/user/infoUserSlice';
import { formModal } from '../store/user/types';
import { CountrySlice } from '../store/country/types';
import { IListCountries } from '../store/country/typesIListCountries';

// import { getFullInfoCountry } from '../store/country/countriesSelectors';

type Props = {};

export default function HomeContainer({}: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListCountriesFetch());
  }, []);

  const listFavoriteCountry = useSelector(getListFavoriteCountries);
  const listCountry = useSelector(getListCountry);

  const isAuth = useSelector(getIsAuthentication);
  if (!isAuth) {
    dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
    return <Navigate to="/" />;
  }

  let listFullInfoFavoriteCountry: IListCountries[] = [];

  listFavoriteCountry.map((nameFavoriteCountry) =>
    listFullInfoFavoriteCountry.push(
      listCountry.find(
        (country) => country.name.official === nameFavoriteCountry,
      ) as IListCountries,
    ),
  );

  return (
    <div className="container-countries-cards">
      {listFullInfoFavoriteCountry.map((country) => (
        <CountryCard
          key={country.name.official}
          flags={country.flags.svg}
          flagsAlt={country.flags.alt}
          nameCountry={country.name.official}
          nameCapital={country.capital.join(', ')}
        />
      ))}
    </div>
  );
}
