import { useSelector } from 'react-redux';
import { getListFavoriteCountries } from '../../../../entities/viewer/model/user/userSelectors';

export const isFavoriteCountry = (
  nameCountry: string,
  listFavoriteCountries: {
    nameCountry: string;
    nameCapital: string;
    currencies: string;
    region: string;
    languages: string;
    population: string;
    flags: string;
    flagsAlt: string;
    coatOfArms: string;
  }[],
) => {
  if (
    listFavoriteCountries.find(
      (favoriteCountry: any) => nameCountry === favoriteCountry.nameCountry,
    )
  )
    return true;
  else return false;
};
