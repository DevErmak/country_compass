import './form-login.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { LOGIN } from '../../shared/api/graphqlV1';
import { useLazyQuery } from '@apollo/client';
import Loader from '../Loader/Loader';
import { useCookies } from 'react-cookie';
type Props = {};

export default function FormLogin({}: Props) {
  const [isActiveAnimate, setActiveAnimate] = useState(false);
  useEffect(() => {
    setFocus('login');
  }, []);

  const [cookie, setCookie] = useCookies(['accessToken']);

  const [loginUser, { loading, error, data }] = useLazyQuery(LOGIN);
  useEffect(() => {
    setActiveAnimate(false);
    setTimeout(() => setActiveAnimate(true), 600);
  }, [error]);
  useEffect(() => {
    if (data !== undefined) {
      if (data.login !== null) {
        if (data.login.__typename === 'AccessToken') {
          setCookie('accessToken', data.login.token);
        }
      }
    }
  }, [data]);

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
    loginUser({
      variables: {
        login: data.login,
        password: data.password,
      },
    });

    reset();
  };
  if (loading) return <Loader />;
  else
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
                isActiveAnimate
                  ? 'input-password-sign-in'
                  : 'input-password-sign-in input-not-valid'
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
