import './form-login.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ZodError, isValid, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { addFavoriteCountry, setAuthentication, setUserName } from '../../store/user/infoUserSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { LOGIN } from '../../api/graphqlV1/requests';
import { useLazyQuery, useQuery } from '@apollo/client';
import Loader from '../Loader/Loader';
import { useCookies } from 'react-cookie';
type Props = {};

export default function FormLogin({}: Props) {
  const [isActiveAnimate, setActiveAnimate] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setFocus('login');
  }, []);

  const [cookie, setCookie] = useCookies(['accessToken']);

  const [loginUser, { loading, error, data }] = useLazyQuery(LOGIN);
  console.log('---------------->error', error);
  useEffect(() => {
    setActiveAnimate(false);
    setTimeout(() => setActiveAnimate(true), 600);
  }, [error]);
  console.log('--sad-------sad------->data', data);
  useEffect(() => {
    if (data !== undefined) {
      if (data.login !== null) {
        console.log('loginqwe---------------->data', data);
        console.log('lohinqwe---------------->dataasdasd', data.login.__typename);
        if (data.login.__typename === 'AccessToken') {
          // dispatch(setAuthToken(data.registerUser.token));
          setCookie('accessToken', data.login.token);
          // dispatch(setAuthentication(true));
          // let cookieValue = cookie.accessToken;
          // console.log('---------------->cookieValue', cookieValue);
        }
      }
    }
  }, [data]);

  console.log('---------------->data', data);
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
    // let userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
    // if (userInfo !== null) {
    //   const user = userInfo.find((item: any) => item.name === data.login);
    //   if (user === undefined) {
    //     setActiveAnimate(false);
    //     setTimeout(() => setActiveAnimate(true), 600);
    //   } else {
    //     if (user.password === data.password) {
    //       dispatch(setUserName(user.name));
    //       dispatch(addFavoriteCountry(user.listFavorite));
    //       dispatch(setAuthentication(true));
    //     } else {
    //       setActiveAnimate(false);
    //       setTimeout(() => setActiveAnimate(true), 600);
    //     }
    //   }
    // }
    console.log('---------------->make rerer');
    console.log('---------------->data.login', data.login);
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
