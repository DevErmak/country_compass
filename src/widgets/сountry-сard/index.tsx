import './country-card.scss';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { getFullInfoCountryFetch } from '../../entities/country/model/country/infoCountrySlice';
import BtnSetFavorite from '../../features/buttons/set-favorite';
import DescriptionCountry from '../../entities/country/ui/description-country';

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
const CountryCard: React.FC<any> = ({ currentInfoCountry }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickCard = (nameCountry: string) => {
    dispatch(getFullInfoCountryFetch(nameCountry));
    //console.log('!!!!---------------->nameCountry', nameCountry);
    navigate('/full-info-country');
  };

  return (
    <div
      className="container-country-card"
      onClick={() => handleClickCard(currentInfoCountry.nameCountry)}
    >
      {/* //   <img
    //     className="flag-img-card"
    //     src={currentInfoCountry.flags}
    //     alt={currentInfoCountry.flagsAlt}
    //   />
    //   <div className="info-country-card">
    //     <div className="name-card-country">{currentInfoCountry.nameCountry}</div>
    //     <div className="name-card-capital">
    //       <div className="label-for-info-country">Capital:</div>
    //       {currentInfoCountry.nameCapital}
    //     </div>
  //   </div> */}
      <DescriptionCountry currentInfoCountry={currentInfoCountry} />
      <BtnSetFavorite fullInfoCountry={currentInfoCountry} className="star-card" />
    </div>
  );
};

export default CountryCard;
