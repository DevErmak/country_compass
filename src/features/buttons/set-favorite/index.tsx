import { useSelector } from 'react-redux';

import { BsFillStarFill } from 'react-icons/bs';

import { BsStar } from 'react-icons/bs';
import { isFavoriteCountry } from './model/is-favorite-country';
import { handleRemoveFavoriteCountry } from './model/remove-country';
import { handleAddFavoriteCountry } from './model/add-favorite-country';
import { handleAddInBufferCountry } from './model/add-in-buffer-country';
import {
  getIsAuthentication,
  getListFavoriteCountries,
} from '../../../entities/viewer/model/user/userSelectors';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  DELETE_FAVORITECOUNTRIES,
  GET_FAVORITECOUNTRIES,
  SET_FAVORITECOUNTRIES,
} from '../../../shared/api/graphqlV1';
import { useEffect } from 'react';
import { addFavoriteCountry } from '../../../entities/viewer/model/user/infoUserSlice';
import { getFormatFullInfoCountry } from '@/entities/country/model/country/countriesSelectors';

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
  className: string;
};
const BtnSetFavorite: React.FC<any> = ({ fullInfoCountry, className }: Props) => {
  const dispatch = useDispatch();
  const listFavoriteCountries = useSelector(getListFavoriteCountries);
  const isLogin = useSelector(getIsAuthentication);
  const [cookie] = useCookies(['accessToken']);

  // if (!fullInfoCountry) const fullInfoCountry = useSelector(getFormatFullInfoCountry);

  const [setFavoriteCountry] = useMutation(SET_FAVORITECOUNTRIES);
  const [deleteFavoriteCountry] = useMutation(DELETE_FAVORITECOUNTRIES);
  const [getFavoriteCountry] = useLazyQuery(GET_FAVORITECOUNTRIES);

  // useEffect(() => {
  //   //console.log('---------------->szxc');
  //   getFavoriteCountry({
  //     context: {
  //       headers: {
  //         ...Headers,
  //         authorization: `Bearer ${cookie.accessToken}`,
  //       },
  //     },
  //   });
  // }, [dataSetFavoriteCountry]);

  // useEffect(() => {
  //   //console.log('---------------->aaaa');
  //   getFavoriteCountry({
  //     context: {
  //       headers: {
  //         ...Headers,
  //         authorization: `Bearer ${cookie.accessToken}`,
  //       },
  //     },
  //   });
  // }, [dataDeleteFavoriteCountry]);

  // useEffect(() => {
  //   //console.log('---------------->ssaaaaa');
  //   if (data) {
  //     if (data.getMe.FavoriteCountry) {
  //       dispatch(addFavoriteCountry(data.getMe.FavoriteCountry));
  //     }
  //   }
  // }, [data]);

  if (isLogin) {
    console.log('---------------->asd', fullInfoCountry);
    if (isFavoriteCountry(fullInfoCountry?.nameCountry, listFavoriteCountries)) {
      //console.log('---------------->asdas');

      return (
        <div className="favorite">
          <BsFillStarFill
            className={className}
            onClick={(e) =>
              handleRemoveFavoriteCountry(
                fullInfoCountry.nameCountry,
                e,
                cookie,
                dispatch,
                deleteFavoriteCountry,
                getFavoriteCountry,
              )
            }
          />
        </div>
      );
    } else {
      //console.log('---------------->aas');

      return (
        <div className="no-favorite">
          <BsStar
            className={className}
            onClick={(e) =>
              handleAddFavoriteCountry(
                fullInfoCountry,
                cookie,
                setFavoriteCountry,
                getFavoriteCountry,
                dispatch,
                e,
              )
            }
          />
        </div>
      );
    }
  } else {
    //console.log('---------------->aq1');
    return (
      <div className="no-favorite">
        <BsStar
          className={className}
          onClick={(e) => handleAddInBufferCountry(fullInfoCountry, e, dispatch)}
        />
      </div>
    );
  }
};
export default BtnSetFavorite;
