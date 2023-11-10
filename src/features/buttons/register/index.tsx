import React from 'react';
import { ClickOnRegister } from './model/click-on-register';
import Button from '../../../shared/ui/button';
import './register.scss';
import { useDispatch } from 'react-redux';

type Props = {};

const BtnRegister: React.FC<any> = ({}: Props) => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => ClickOnRegister(dispatch)} title={'Register'} className={'register'} />
  );
};

export default BtnRegister;
