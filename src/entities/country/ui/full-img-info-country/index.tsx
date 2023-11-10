import { useSelector } from 'react-redux';
import './full-img-info-country.scss';
import { getFormatFullInfoCountry } from '../../model/country/countriesSelectors';

type Props = {};

const FullImgInfoCountry: React.FC<any> = ({}: Props) => {
  const currentInfoCountry = useSelector(getFormatFullInfoCountry);

  return (
    <div className="container-img-full-info-country">
      <div className="flag">Flag</div>
      <img
        className="flag-img"
        src={currentInfoCountry?.flags}
        alt={currentInfoCountry?.flagsAlt}
      />
      <div className="coat-of-arms">Coat of arms</div>
      <img className="coat-of-arms-img" src={currentInfoCountry?.coatOfArms} alt={''} />
    </div>
  );
};
export default FullImgInfoCountry;
