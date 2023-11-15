import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import './my-countries.scss';
import { useLazyQuery } from '@apollo/client';
import { GET_FAVORITECOUNTRIES } from '../../shared/api/graphqlV1';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { getListFavoriteCountries } from '../../entities/viewer/model/user/userSelectors';
import EmptyFavoriteCountry from '../../widgets/empty-favorite-country';
import ListCountryCard from '../../widgets/list-сountry-сard';

type Props = {};
const MyCountries: React.FC<any> = ({}: Props) => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);

  // const [getFavoriteCountry, { loading, error, data }] = useLazyQuery(GET_FAVORITECOUNTRIES, {
  //   context: {
  //     headers: {
  //       ...Headers,
  //       authorization: `Bearer ${cookie.accessToken}`,
  //     },
  //   },
  //   errorPolicy: 'all',
  // });
  // useEffect(() => {
  //   if (data) {
  //     if (data.getMe.FavoriteCountry) {
  //       dispatch(addFavoriteCountry(data.getMe.FavoriteCountry));
  //     }
  //   }
  // }, [data]);

  // useEffect(() => {
  //   getFavoriteCountry();
  // }, []);

  const listFavoriteCountry = useSelector(getListFavoriteCountries);

  // const infoErrorResponse = useSelector(getInfoErrorResponse);

  // const isAuth = useSelector(getIsAuthentication);
  // if (!isAuth) {
  //   dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
  //   return <Navigate to="/" />;
  // }

  // if (infoErrorResponse.trim().length !== 0) {
  //   return <Navigate to="/" />;
  // }

  if (Object.keys(listFavoriteCountry).length === 0)
    return (
      <div className="favorite-container">
        <EmptyFavoriteCountry />;
      </div>
    );
  return (
    <div className="favorite-container">
      <ListCountryCard listCountry={listFavoriteCountry} />
    </div>
  );
};

export default MyCountries;
