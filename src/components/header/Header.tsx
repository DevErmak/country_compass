import './header.css';
type Props = {
  isLogin: boolean;
};

export default function Header({ isLogin }: Props) {
  if (isLogin)
    return (
      <div className="container-header">
        <div className="name-site">Europe.know</div>
        <div className="spacer"></div>
        <div className="logout">Logout</div>
        <div className="my-countries">My countries</div>
      </div>
    );
  else
    return (
      <div className="container-header">
        <div className="name-site">Europe.know</div>
        <div className="spacer"></div>
        <div className="login">Login</div>
        <div className="register">Register</div>
      </div>
    );
}
