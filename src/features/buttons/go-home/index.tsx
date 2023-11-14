import React from 'react';
import { clickOnGoHome } from './model/click-on-home';
import './go-home.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@/shared/ui/button';

type Props = {};

const BtnGoHome: React.FC<any> = ({}: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => clickOnGoHome(dispatch, navigate)}
      title={'Europe.know'}
      className={'name-site'}
    />
  );
};

export default BtnGoHome;
