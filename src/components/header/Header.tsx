import { Link, redirect, useNavigate } from 'react-router-dom';
import './header.css';
import { useDispatch } from 'react-redux';
import { getFullInfoCountryClear } from '../../store/country/infoCountrySlice';
import { useSelector } from 'react-redux';
import {
  getIsActiveModal,
  getIsAuthentication,
  getListFavoriteCountries,
  getState,
  getUserName,
} from '../../store/user/userSelectors';
import { setActiveModal, setAuthentication } from '../../store/user/infoUserSlice';
import Modal from '../modal/Modal';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import FormLogin from '../login/FormLogin';
import FormRegister from '../register/FormRegister';

type Props = {};

export default function Header({}: Props) {
  const navigate = useNavigate();
  const listFavorite = useSelector(getListFavoriteCountries);

  const isLogin = useSelector(getIsAuthentication);

  const dispatch = useDispatch();
  const isActiveModal = useSelector(getIsActiveModal);
  console.log('---------------->isActiveModal', isActiveModal);
  const State = useSelector(getState);
  console.log('---------------->State', State);

  const [isRegister, setIsRegister] = useState(false);
  const userName = useSelector(getUserName);

  const ClickOnNameSite = () => {
    dispatch(getFullInfoCountryClear());
  };

  const ClickOnLogOut = () => {
    let userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
    console.log('123213-----------123213----->userInfo', userInfo);
    console.log('123213-----------123213----->userName', userName);

    if (userInfo !== null) {
      const user = userInfo.find((item: any) => item.name === userName);
      if (user !== undefined) {
        console.log('123123---------------->user', user);
        const newUserInfo = userInfo.filter((item: any) => user !== item);
        user.listFavorite = listFavorite;
        newUserInfo.push(user);
        localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
      }
    }
    dispatch(setAuthentication(false));
  };

  const ClickOnLogin = () => {
    dispatch(setActiveModal(true));
    setIsRegister(false);
  };

  const ClickOnRegister = () => {
    dispatch(setActiveModal(true));
    setIsRegister(true);
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
  else
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
        {isRegister ? (
          <Modal>
            <FormRegister />
          </Modal>
        ) : (
          <Modal>
            <FormLogin />
          </Modal>
        )}
      </>
    );
}
