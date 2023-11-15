import { setActiveMenu } from '@/entities/viewer/model/user/infoUserSlice';
import './no-auth-header.scss';
import Burger from '@/features/buttons/burger';
import BtnGoHome from '@/features/buttons/go-home';
import BtnLogin from '@/features/buttons/login';
import BtnRegister from '@/features/buttons/register';
import { getIsActiveMenu } from '@/entities/viewer/model/user/userSelectors';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

type Props = {};

const NoAuthHeader: React.FC<any> = ({}: Props) => {
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
        <BtnLogin />
        <BtnRegister />
      </div>
      <Burger />
    </>
  );
};
export default NoAuthHeader;
