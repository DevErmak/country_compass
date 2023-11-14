import './no-auth-header.scss';
import Burger from '@/features/buttons/burger';
import BtnGoHome from '@/features/buttons/go-home';
import BtnLogin from '@/features/buttons/login';
import BtnRegister from '@/features/buttons/register';

type Props = {};

const NoAuthHeader: React.FC<any> = ({}: Props) => {
  return (
    <>
      <BtnGoHome />
      <div className="container-menu">
        <BtnLogin />
        <BtnRegister />
      </div>
      <Burger />
    </>
  );
};
export default NoAuthHeader;
