import React from 'react';
import { ClickOnGoHome } from './model/click-on-home';
import Button from '../../../shared/ui/button';
import './go-home.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type Props = {};

const BtnGoHome: React.FC<any> = ({}: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => ClickOnGoHome(dispatch, navigate)}
      title={'Europe.know'}
      className={'name-site'}
    />
  );
};

export default BtnGoHome;
