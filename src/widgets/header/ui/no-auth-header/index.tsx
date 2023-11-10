import BtnGoHome from '../../../../features/buttons/go-home';
import BtnLogin from '../../../../features/buttons/login';
import BtnRegister from '../../../../features/buttons/register';

type Props = {};

const NoAuthHeader: React.FC<any> = ({}: Props) => {
  return (
    <>
      <div className="container-header">
        <BtnGoHome />
        {/* <div className="spacer"></div> */}
        <BtnLogin />
        <BtnRegister />
      </div>
    </>
  );
};
export default NoAuthHeader;
