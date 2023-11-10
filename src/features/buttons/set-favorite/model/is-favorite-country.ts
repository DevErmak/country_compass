// import { useQuery } from '@apollo/client';
// import { GET_FAVOURITECOUNTRIES } from '../../../../shared/api/graphqlV1';
// import { useCookies } from 'react-cookie';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addFavoriteCountry } from '../../../../entities/viewer/model/user/infoUserSlice';
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
