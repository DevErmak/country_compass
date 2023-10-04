import { useNavigate } from 'react-router-dom';
import './header.css';
import { useDispatch } from 'react-redux';
import { getFullInfoCountryClear } from '../../store/country/infoCountrySlice';
import { useSelector } from 'react-redux';
import { getIsActiveModal, getState } from '../../store/user/userSelectors';
import { setActiveModal } from '../../store/user/infoUserSlice';
import Modal from '../modal/Modal';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import FormLogin from '../login/FormLogin';
import FormRegister from '../register/FormRegister';

type Props = {
  isLogin: boolean;
};

export default function Header({ isLogin }: Props) {
  const dispatch = useDispatch();
  const isActiveModal = useSelector(getIsActiveModal);
  console.log('---------------->isActiveModal', isActiveModal);
  const State = useSelector(getState);
  console.log('---------------->State', State);

  const [isRegister, setIsRegister] = useState(false);

  const goHome = () => {
    dispatch(getFullInfoCountryClear());
  };

  const ClickOnLogin = () => {
    dispatch(setActiveModal(true));
    console.log('---------------->qwe');
    setIsRegister(false);
    // return <Modal children={<div>qwe1</div>} />;
    // return ReactDOM.createPortal(
    //   <Modal> login</Modal>,
    //   document.getElementById('portal') as HTMLElement,
    // );
  };

  const ClickOnRegister = () => {
    dispatch(setActiveModal(true));
    setIsRegister(true);
    // return ReactDOM.createPortal(
    //   <Modal> register </Modal>,
    //   document.getElementById('portal') as HTMLElement,
    // );
  };

  if (isLogin)
    return (
      <div className="container-header">
        <div className="name-site" onClick={() => goHome()}>
          Europe.know
        </div>
        <div className="spacer"></div>
        <div className="logout">Logout</div>
        <div className="my-countries">My countries</div>
      </div>
    );
  else
    return (
      <>
        <div className="container-header">
          <div className="name-site" onClick={() => goHome()}>
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
