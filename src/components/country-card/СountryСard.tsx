import './country-card.css';
import { ReactComponent as Star } from '../../static/images/star.svg';
import { ReactComponent as StarFavorites } from '../../static/images/star-favorites.svg';
import { useDispatch } from 'react-redux';
import { getFullInfoCountryFetch } from '../../store/country/infoCountrySlice';
type Props = {
  flags: string;
  flagsAlt: string;
  isFavorites: boolean;
  nameCountry: string;
  nameCapital: string;
};

export default function CountryCard({
  flags,
  flagsAlt,
  isFavorites,
  nameCountry,
  nameCapital,
}: Props) {
  const dispatch = useDispatch();

  const getFullInfoCountry = (nameCountry: string) => {
    dispatch(getFullInfoCountryFetch(nameCountry));
  };

  return (
    <div className="container-country-card" onClick={() => getFullInfoCountry(nameCountry)}>
      <img className="flag-img-card" src={flags} alt={flagsAlt} />
      <div className="info-country-card">
        <div className="name-card-country">{nameCountry}</div>
        <div className="name-card-capital">
          <div className="label-for-info-country">Capital:</div>
          {nameCapital}
        </div>
      </div>
      {isFavorites ? (
        <Star className="star-card" />
      ) : (
        <StarFavorites className="star-card-favorites" />
      )}
    </div>
  );
}
