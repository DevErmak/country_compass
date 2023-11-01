import './country-card.css';
import { useDispatch } from 'react-redux';
import { getFullInfoCountryFetch } from '../../store/country/infoCountrySlice';

import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../store/country/countriesSelectors';
import Loader from '../Loader/Loader';
import BtnSetFavorite from '../BtnSetFavorite/BtnSetFavorite';

type Props = {
  currentInfoCountry: {
    nameCountry: string;
    nameCapital: string;
    currencies: string;
    region: string;
    languages: string;
    population: string;
    flags: string;
    flagsAlt: string;
    coatOfArms: string;
  };
};

export default function CountryCard({ currentInfoCountry }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickCard = (nameCountry: string) => {
    dispatch(getFullInfoCountryFetch(nameCountry));
    navigate('/full-info-country');
  };

  return (
    <div
      className="container-country-card"
      onClick={() => handleClickCard(currentInfoCountry.nameCountry)}
    >
      <img
        className="flag-img-card"
        src={currentInfoCountry.flags}
        alt={currentInfoCountry.flagsAlt}
      />
      <div className="info-country-card">
        <div className="name-card-country">{currentInfoCountry.nameCountry}</div>
        <div className="name-card-capital">
          <div className="label-for-info-country">Capital:</div>
          {currentInfoCountry.nameCapital}
        </div>
      </div>
      <BtnSetFavorite fullInfoCountry={currentInfoCountry} modCard="card" />
    </div>
  );
}
