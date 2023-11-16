import { useSelector } from 'react-redux';

import './my-countries.scss';
import { getListFavoriteCountries } from '../../entities/viewer/model/user/userSelectors';
import EmptyFavoriteCountry from '../../widgets/empty-favorite-country';
import ListCountryCard from '../../widgets/list-сountry-сard';

type Props = {};
const MyCountries: React.FC<any> = ({}: Props) => {
  const listFavoriteCountry = useSelector(getListFavoriteCountries);

  if (Object.keys(listFavoriteCountry).length === 0)
    return (
      <div className="favorite-container">
        <EmptyFavoriteCountry />
      </div>
    );
  return (
    <div className="favorite-container">
      <ListCountryCard listCountry={listFavoriteCountry} />
    </div>
  );
};

export default MyCountries;
