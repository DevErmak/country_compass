import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import './header.css';
import { useDispatch } from 'react-redux';
import { getFullInfoCountryClear } from '../../store/country/infoCountrySlice';
import { useSelector } from 'react-redux';
import {
  getFormModal,
  getIsActiveModal,
  getIsAuthentication,
  getListFavoriteCountries,
  getState,
  getUserName,
} from '../../store/user/userSelectors';
import {
  setModal,
  setAuthentication,
  clearAllFavoriteCountry,
  addFavoriteCountry,
} from '../../store/user/infoUserSlice';
import Modal from '../Modal/Modal';
import ReactDOM from 'react-dom';
import FormLogin from '../Login/FormLogin';
import FormRegister from '../Register/FormRegister';
import { formModal } from '../../store/user/types';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_FAVOURITECOUNTRIES } from '../../api/graphqlV1/requests';
import { Zoom, toast } from 'react-toastify';

type Props = {};

export default function Header({}: Props) {
  const navigate = useNavigate();
  const listFavorite = useSelector(getListFavoriteCountries);
  const isLogin = useSelector(getIsAuthentication);
  const dispatch = useDispatch();
  const stateModal = useSelector(getFormModal);
  const userName = useSelector(getUserName);
  const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);

  const [getFavoriteCountry, { data, loading, error }] = useLazyQuery(GET_FAVOURITECOUNTRIES, {
    errorPolicy: 'all',
  });
  const [listFavoriteCountry, setListFavoriteCountry] = useState([]);

  useEffect(() => {
    if (cookie.accessToken) {
      dispatch(setAuthentication(true));
      getFavoriteCountry({
        context: {
          headers: {
            ...Headers,
            authorization: `Bearer ${cookie.accessToken}`,
          },
        },
      });
    } else dispatch(setAuthentication(false));
    console.log('---------------->cookieValue', cookie.accessToken);
  }, [cookie.accessToken]);

  // useEffect(() => {
  //   if (data) {
  //     console.log('---------------->data', data);
  //     if (data.getMe.FavoriteCountry !== null)
  //       dispatch(addFavoriteCountry(data.getMe.FavoriteCountry));
  //   }
  // }, [data]);

  useEffect(() => {
    switch (error?.message) {
      case 'User not found':
        toast.error('User not found', {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Zoom,
        });
        dispatch(clearAllFavoriteCountry());
        removeCookie('accessToken');
        dispatch(setAuthentication(false));
        dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
        break;
    }
  }, [error]);

  const ClickOnNameSite = () => {
    dispatch(getFullInfoCountryClear());
    navigate('/');
  };

  const ClickOnLogOut = () => {
    //запись стран
    // let userInfo = JSON.parse(localStorage.getItem('userInfo') as string);

    // if (userInfo !== null) {
    //   const user = userInfo.find((item: any) => item.name === userName);
    //   if (user !== undefined) {
    //     const newUserInfo = userInfo.filter((item: any) => user !== item);
    //     user.listFavorite = listFavorite;
    //     newUserInfo.push(user);
    //     localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
    //   }
    // }
    dispatch(clearAllFavoriteCountry());
    removeCookie('accessToken');
    dispatch(setAuthentication(false));
    dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
  };

  const ClickOnLogin = () => {
    dispatch(setModal({ isActiveModal: true, formModal: formModal.login }));
  };

  const ClickOnRegister = () => {
    dispatch(setModal({ isActiveModal: true, formModal: formModal.register }));
  };

  if (isLogin)
    return (
      <div className="container-header">
        <div className="name-site" onClick={() => ClickOnNameSite()}>
          Europe.know
        </div>
        <div className="spacer"></div>
        <div className="logout" onClick={() => ClickOnLogOut()}>
          Logout
        </div>
        <div className="my-countries" onClick={() => navigate('my-countries')}>
          My countries
        </div>
      </div>
    );
  return (
    <>
      <div className="container-header">
        <div className="name-site" onClick={() => ClickOnNameSite()}>
          Europe.know
        </div>
        <div className="spacer"></div>
        <div className="login" onClick={() => ClickOnLogin()}>
          Login
        </div>
        <div className="register" onClick={() => ClickOnRegister()}>
          Register
        </div>
      </div>
      <Modal>{stateModal === formModal.login ? <FormLogin /> : <FormRegister />}</Modal>
    </>
  );
}
