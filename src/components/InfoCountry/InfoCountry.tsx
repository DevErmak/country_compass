// import { AiFillStar } from 'react-icons/ai';
import './info-country.css';
import { ReactComponent as Star } from '../../static/images/star.svg';
import { ReactComponent as StarFavorites } from '../../static/images/star-favorites.svg';

type Props = {
  nameCountry: string;
  nameCapital: string;
  currencies: string;
  region: string;
  languages: string;
  population: string;
  isFavorites: boolean;
};

export default function InfoCountry({
  nameCountry,
  nameCapital,
  currencies,
  region,
  languages,
  population,
  isFavorites,
}: Props) {
  return (
    <div className="container-info-country">
      {isFavorites ? <Star className="star" /> : <StarFavorites className="star-favorites" />}
      <div className="text-info-country">
        <div className="name-country">{nameCountry}</div>
        <div className="name-capital">
          <div className="label-for-info-country">Capital:</div>
          {nameCapital}
        </div>
        <div className="currencies">
          <div className="label-for-info-country">Currencies:</div>
          {currencies}
        </div>
        <div className="region">
          <div className="label-for-info-country">Currencies:</div>

          {region}
        </div>
        <div className="languages">
          <div className="label-for-info-country">Currencies:</div>
          {languages}
        </div>
        <div className="population">
          <div className="label-for-info-country">Population:</div>
          {population}
        </div>
      </div>
    </div>
  );
}
