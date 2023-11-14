import './auth-header.scss';
import BtnGoHome from '@/features/buttons/go-home';
import BtnLogOut from '@/features/buttons/logout';
import BtnMyCountries from '@/features/buttons/my-countries';
import Burger from '@/features/buttons/burger';

type Props = {};

const AuthHeader: React.FC<any> = ({}: Props) => {
  return (
    <>
      <BtnGoHome />
      <div className="container-menu">
        <BtnLogOut />
        <BtnMyCountries />
      </div>
      <Burger />
    </>
  );
};

export default AuthHeader;
