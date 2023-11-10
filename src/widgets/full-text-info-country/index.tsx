import './full-text-info-country.scss';
import BtnSetFavorite from '../../features/buttons/set-favorite';
import FullDescriptionCountry from '../../entities/country/ui/full-description-country';
import { useSelector } from 'react-redux';
import { getFormatFullInfoCountry } from '../../entities/country/model/country/countriesSelectors';

type Props = {};
const FullTextInfoCountry: React.FC<any> = ({}: Props) => {
  const currentInfoCountry = useSelector(getFormatFullInfoCountry);
  return (
    <div className="container-info-country">
      <FullDescriptionCountry />
      <BtnSetFavorite fullInfoCountry={currentInfoCountry} className="star-full-info" />
    </div>
  );
};

export default FullTextInfoCountry;
