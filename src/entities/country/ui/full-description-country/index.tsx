import { useSelector } from 'react-redux';
import './info-country.scss';
import { getFormatFullInfoCountry } from '../../model/country/countriesSelectors';

type Props = {};
const FullDescriptionCountry: React.FC<any> = ({}: Props) => {
  const fullInfoCountry = useSelector(getFormatFullInfoCountry);
  if (fullInfoCountry !== undefined)
    return (
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
    );
};

export default FullDescriptionCountry;
