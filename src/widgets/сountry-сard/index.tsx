import './country-card.scss';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { getFullInfoCountryFetch } from '../../entities/country/model/country/infoCountrySlice';
import DescriptionCountry from '@/entities/country/ui/description-country';
import BtnSetFavorite from '@/features/buttons/set-favorite';

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
  const handleClickCard = (nameCountry: string, e: React.SyntheticEvent) => {
    navigate(`/detailed-info/${nameCountry}`);
  };

  return (
    <div
      className="container-country-card"
      onClick={(e) => handleClickCard(currentInfoCountry.nameCountry, e)}
    >
      <DescriptionCountry currentInfoCountry={currentInfoCountry} />
      <BtnSetFavorite fullInfoCountry={currentInfoCountry} className="star-card" />
    </div>
  );
};

export default CountryCard;
