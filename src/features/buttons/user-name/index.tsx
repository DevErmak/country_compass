import React from 'react';
import Button from '../../../shared/ui/button';
import { ClickOnUserName } from './model/click-on-user-name';

type Props = {};

const BtnUserName: React.FC<any> = ({}: Props) => {
  return <Button onClick={() => ClickOnUserName()} title={'Register'} className={'register'} />;
};

export default BtnUserName;
