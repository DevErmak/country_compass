import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Button from '@/shared/ui/button';
import { MdClose } from 'react-icons/md';
import './burger.scss';
import { useSelector } from 'react-redux';
import { getIsActiveMenu } from '@/entities/viewer/model/user/userSelectors';
import { useDispatch } from 'react-redux';
import { setActiveMenu } from '@/entities/viewer/model/user/infoUserSlice';

type Props = {};

const Burger: React.FC<any> = ({}: Props) => {
  const isActiveMenu = useSelector(getIsActiveMenu);
  const dispatch = useDispatch();

  if (isActiveMenu)
    return (
      <Button
        onClick={() => dispatch(setActiveMenu(!isActiveMenu))}
        icon={<MdClose />}
        className={'burger'}
      />
    );
  return (
    <Button
      onClick={() => dispatch(setActiveMenu(!isActiveMenu))}
      icon={<RxHamburgerMenu />}
      className={'burger'}
    />
  );
};

export default Burger;
