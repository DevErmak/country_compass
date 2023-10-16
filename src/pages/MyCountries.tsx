import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getListCountry, getInfoErrorResponse } from '../store/country/countriesSelectors';
import { Navigate, useNavigate } from 'react-router-dom';
import CountryCard from '../components/CountryCard/СountryСard';

import './home.css';
import { getIsAuthentication, getListFavoriteCountries } from '../store/user/userSelectors';
import { setModal } from '../store/user/infoUserSlice';
import { formModal } from '../store/user/types';
import { IListCountries } from '../store/country/typesIListCountries';

type Props = {};

export default function HomeContainer({}: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const listFavoriteCountry = useSelector(getListFavoriteCountries);
  const listCountry = useSelector(getListCountry);
  const infoErrorResponse = useSelector(getInfoErrorResponse);

  const isAuth = useSelector(getIsAuthentication);
  if (!isAuth) {
    dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
    return <Navigate to="/" />;
  }

  if (infoErrorResponse.trim().length !== 0) {
    return <Navigate to="/" />;
  }
  if (Object.keys(listFavoriteCountry).length === 0) {
    return (
      <div className="empty-favorite-container">
        <div className="info-about-empty-favorite">
          <div>The list of favorite countries is empty.</div>
          <div className="choose-country" onClick={() => navigate('/')}>
            Choose a country
          </div>
        </div>
      </div>
    );
  } else {
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
}
