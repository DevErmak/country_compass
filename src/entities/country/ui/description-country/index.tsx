import './description-country.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFullInfoCountryFetch } from '../../model/country/infoCountrySlice';

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

const DescriptionCountry: React.FC<any> = ({ currentInfoCountry }: Props) => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const handleClickCard = (nameCountry: string) => {
  //   dispatch(getFullInfoCountryFetch(nameCountry));
  //   navigate('/full-info-country');
  // };

  return (
    <>
      <img
        className="flag-img-card"
        src={currentInfoCountry.flags}
        alt={currentInfoCountry.flagsAlt}
      />
      <div className="info-country-card">
        <div className="name-country-card">{currentInfoCountry.nameCountry}</div>
        <div className="name-capital-card">
          <div className="label-for-info-country-card">Capital:</div>
          {currentInfoCountry.nameCapital}
        </div>
      </div>
    </>
  );
};

export default DescriptionCountry;
