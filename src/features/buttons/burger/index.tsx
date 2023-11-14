import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Button from '@/shared/ui/button';
import { TfiClose } from 'react-icons/tfi';
import './burger.scss';
import { useSelector } from 'react-redux';
import { getIsActiveMenu } from '@/entities/viewer/model/user/userSelectors';

type Props = {};

const Burger: React.FC<any> = ({}: Props) => {
  const isActiveMenu = useSelector(getIsActiveMenu);
  if (isActiveMenu)
    return (
      <Button onClick={() => d} icon={<RxHamburgerMenu />} className={'burger'} />
    );
  return <Button onClick={() => } icon={<TfiClose />} className={'burger'} />;
};

export default Burger;
