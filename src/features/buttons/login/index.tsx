import React from 'react';
import { ClickOnLogin } from './model/click-on-login';
import Button from '../../../shared/ui/button';
import './login.scss';
import { useDispatch } from 'react-redux';

type Props = {};

const BtnLogin: React.FC<any> = ({}: Props) => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={(e: React.SyntheticEvent) => {
        e.stopPropagation();
        ClickOnLogin(dispatch);
      }}
      title={'Login'}
      className={'login'}
    />
  );
};

export default BtnLogin;
