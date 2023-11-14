import { useSelector } from 'react-redux';
import AuthHeader from './ui/auth-header';
import NoAuthHeader from './ui/no-auth-header';
import { getIsAuthentication } from '../../entities/viewer/model/user/userSelectors';

import './header.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAuthentication } from '../../entities/viewer/model/user/infoUserSlice';
import { useCookies } from 'react-cookie';

type Props = {};

export default function Header({}: Props) {
  const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);

  const dispatch = useDispatch();
  useEffect(() => {
    //console.log('---------------->qqwwqqwe');
    if (Object.keys(cookie).length !== 0) {
      //console.log('---------------->qqw1123');
      dispatch(setAuthentication(true));
    }
  }, [cookie]);

  const isLogin = useSelector(getIsAuthentication);
  if (isLogin)
    return (
      <div className="container-header">
        <AuthHeader />;
      </div>
    );
  return (
    <div className="container-header">
      <NoAuthHeader />;
    </div>
  );
}
