import { useState } from 'react';
import './form-register.css';

type Props = {};

export default function FormLogin({}: Props) {
  const addUser = (e: any) => {
    e.preventDefault();
    let userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
    if (userInfo.find((item: any) => item.name === login) === undefined) {
      console.log('---------------->goood');
      userInfo.push({ name: login, password: password, listFavorite: [] });
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    } else {
      console.log('---------------->такой пользователь есть');
    }
  };
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="container-register">
      <div className="modal-register">Register</div>
      <form className="form-register" onClick={() => addUser}>
        <div>
          <label htmlFor="input-login" className="label-login">
            Login:
          </label>
          <input
            className="input-login"
            onChange={(e: any) => {
              setLogin(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="input-password" className="label-password">
            Password:
          </label>
          <input className="input-password" onChange={(e: any) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="input-confirm-password" className="label-confirm-password">
            Confirm password:
          </label>
          <input
            className="input-confirm-password"
            onChange={(e: any) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="btn-register">
          <input type="submit" value="Register" id="btn-register" onClick={addUser} />
        </div>
      </form>
    </div>
  );
}
