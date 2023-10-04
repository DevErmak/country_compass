import './form-login.css';

type Props = {};

export default function FormLogin({}: Props) {
  return (
    <div className="container-sign-in">
      <div className="sign-in">Sign in</div>
      <form className="form-sign-in">
        <div>
          <label htmlFor="input-login" className="label-login">
            Login:
          </label>
          <input className="input-login" />
        </div>
        <div>
          <label htmlFor="input-password" className="label-password">
            Password:
          </label>
          <input className="input-password" />
        </div>
        <div className="btn-sign-in">
          <input type="submit" value="Sign in" id="btn-sign-in" />
        </div>
      </form>
    </div>
  );
}
