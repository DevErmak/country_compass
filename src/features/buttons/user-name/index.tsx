import React from 'react';
import Button from '../../../shared/ui/button';
import { clickOnUserName } from './model/click-on-user-name';
import { useCookies } from 'react-cookie';
import { getUserName } from './model/get-user-name';
import './user-name.scss';

type Props = {};

const BtnUserName: React.FC<any> = ({}: Props) => {
  const [cookie] = useCookies(['accessToken']);
  const nameUser = getUserName(cookie);

  console.log('---------------->');
  return <Button onClick={() => clickOnUserName()} title={nameUser} className={'user-name'} />;
};

export default BtnUserName;
