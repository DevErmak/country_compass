import React from 'react';
import { clickOnLogin } from './model/click-on-login';
import Button from '../../../shared/ui/button';
import './login.scss';
import { useDispatch } from 'react-redux';

type Props = {};

const BtnLogin: React.FC<any> = ({}: Props) => {
  const dispatch = useDispatch();

  return <Button onClick={clickOnLogin(dispatch)} title={'Login'} className={'login'} />;
};

export default BtnLogin;
