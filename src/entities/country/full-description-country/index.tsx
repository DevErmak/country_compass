import './info-country.css';
import BtnSetFavorite from '../../features/BtnSetFavorite/BtnSetFavorite';

type Props = {
  fullInfoCountry: {
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

export default function FullDescriptionCountry({ fullInfoCountry }: Props) {
  return (
    <div className="container-info-country">
      <BtnSetFavorite fullInfoCountry={fullInfoCountry} modCard="" />
      <div className="text-info-country">
        <div className="name-country">{fullInfoCountry.nameCountry}</div>
        <div className="name-capital">
          <div className="label-for-info-country">Capital:</div>
          {fullInfoCountry.nameCapital}
        </div>
        <div className="currencies">
          <div className="label-for-info-country">Currencies:</div>
          {fullInfoCountry.currencies}
        </div>
        <div className="region">
          <div className="label-for-info-country">Currencies:</div>
          {fullInfoCountry.region}
        </div>
        <div className="languages">
          <div className="label-for-info-country">Currencies:</div>
          {fullInfoCountry.languages}
        </div>
        <div className="population">
          <div className="label-for-info-country">Population:</div>
          {fullInfoCountry.population}
        </div>
      </div>
    </div>
  );
}
