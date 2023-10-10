import './country-card.css';
import { useDispatch } from 'react-redux';
import { getFullInfoCountryFetch } from '../../store/country/infoCountrySlice';

import BtnFavorite from './BtnFavorite';

type Props = {
  flags: string;
  flagsAlt: string;
  nameCountry: string;
  nameCapital: string;
};

export default function CountryCard({ flags, flagsAlt, nameCountry, nameCapital }: Props) {
  const dispatch = useDispatch();

  return (
    <div
      className="container-country-card"
      onClick={() => dispatch(getFullInfoCountryFetch(nameCountry))}
    >
      <img className="flag-img-card" src={flags} alt={flagsAlt} />
      <div className="info-country-card">
        <div className="name-card-country">{nameCountry}</div>
        <div className="name-card-capital">
          <div className="label-for-info-country">Capital:</div>
          {nameCapital}
        </div>
      </div>
      <BtnFavorite nameCountry={nameCountry} />
    </div>
  );
}
