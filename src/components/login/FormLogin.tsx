import './form-login.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ZodError, isValid, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { addFavoriteCountry, setAuthentication, setUserName } from '../../store/user/infoUserSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
type Props = {};

export default function FormLogin({}: Props) {
  const [isActiveAnimate, setActiveAnimate] = useState(true);
  const dispatch = useDispatch();

  const formSchemaLogin = z.object({
    login: z.string().trim().min(1, { message: 'Field is required' }).email('Email is not correct'),
    password: z.string().min(1, { message: 'Field is required' }),
  });

  type LoginFields = z.infer<typeof formSchemaLogin>;

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    trigger,
    formState: { isDirty, isSubmitting, errors, isValid },
  } = useForm<LoginFields>({
    mode: 'all',
    resolver: zodResolver(formSchemaLogin),
  });

  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    let userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
    if (userInfo !== null) {
      const user = userInfo.find((item: any) => item.name === data.login);
      if (user === undefined) {
        setActiveAnimate(false);
        setTimeout(() => setActiveAnimate(true), 600);
      } else {
        if (user.password === data.password) {
          dispatch(setUserName(user.name));
          console.log('32!--------------->user.listFavorite', user.listFavorite);
          dispatch(addFavoriteCountry(user.listFavorite));
          dispatch(setAuthentication(true));
        } else {
          setActiveAnimate(false);
          setTimeout(() => setActiveAnimate(true), 600);
        }
      }
    }
    reset();
  };

  useEffect(() => {
    setFocus('login');
  }, []);

  return (
    <div className="container-sign-in">
      <div className="sign-in">Sign in</div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-sign-in">
        <div>
          <div className={'error-login'}>{errors.login && errors.login?.message}</div>
          <label
            htmlFor="input-login"
            className={errors.login ? 'label-login not-valid' : 'label-login'}
          >
            Login:
          </label>
          <input
            {...register('login')}
            type="text"
            className={
              isActiveAnimate ? 'input-login-sign-in' : 'input-login-sign-in input-not-valid'
            }
          />
        </div>
        <div>
          <div className={'error-password'}>{errors.password && errors.password?.message}</div>
          <label
            htmlFor="password"
            className={errors.password ? 'label-password not-valid' : 'label-password'}
          >
            Password:
          </label>
          <input
            {...register('password')}
            type="password"
            className={
              isActiveAnimate ? 'input-password-sign-in' : 'input-password-sign-in input-not-valid'
            }
          />
        </div>
        <div className="btn-sign-in">
          <button type="submit" id="btn-sign-in" disabled={!isValid}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
