import './auth-header.scss';
import BtnGoHome from '@/features/buttons/go-home';
import BtnLogOut from '@/features/buttons/logout';
import BtnMyCountries from '@/features/buttons/my-countries';
import Burger from '@/features/buttons/burger';
import { setActiveMenu } from '@/entities/viewer/model/user/infoUserSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getIsActiveMenu } from '@/entities/viewer/model/user/userSelectors';
import BtnUserName from '@/features/buttons/user-name';

type Props = {};

const AuthHeader: React.FC<any> = ({}: Props) => {
  const dispatch = useDispatch();
  const isActiveMenu = useSelector(getIsActiveMenu);
  return (
    <>
      <BtnGoHome />
      <div
        className={isActiveMenu ? 'container-menu active-menu' : 'container-menu'}
        onClick={() => {
          dispatch(setActiveMenu(false));
        }}
      >
        <BtnUserName />
        <BtnLogOut />
        <BtnMyCountries />
      </div>
      <Burger />
    </>
  );
};

export default AuthHeader;
