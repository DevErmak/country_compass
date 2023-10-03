import { useNavigate } from 'react-router-dom';
import './header.css';
import { useDispatch } from 'react-redux';
import { getFullInfoCountryClear } from '../../store/country/infoCountrySlice';
type Props = {
  isLogin: boolean;
};

export default function Header({ isLogin }: Props) {
  const dispatch = useDispatch();
  const goHome = () => {
    dispatch(getFullInfoCountryClear());
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
      <div className="container-header">
        <div className="name-site" onClick={() => goHome()}>
          Europe.know
        </div>
        <div className="spacer"></div>
        <div className="login">Login</div>
        <div className="register">Register</div>
      </div>
    );
}
