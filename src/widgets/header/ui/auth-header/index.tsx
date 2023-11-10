import BtnGoHome from '../../../../features/buttons/go-home';
import BtnLogOut from '../../../../features/buttons/logout';
import BtnMyCountries from '../../../../features/buttons/my-countries';

type Props = {};

const AuthHeader: React.FC<any> = ({}: Props) => {
  return (
    <div className="container-header">
      <BtnGoHome />
      {/* <div className="spacer"></div> */}
      <BtnLogOut />
      <BtnMyCountries />
    </div>
  );
};

export default AuthHeader;
