import React from 'react';
import { clickOnLogout } from './model/btn-logout';
import Button from '../../../shared/ui/button';
import './logout.scss';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';

type Props = {};

const BtnLogOut: React.FC<any> = ({}: Props) => {
  const dispatch = useDispatch();
  const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);

  return (
    <Button
      onClick={() => clickOnLogout(dispatch, removeCookie)}
      title={'Logout'}
      className={'logout'}
    />
  );
};

export default BtnLogOut;
