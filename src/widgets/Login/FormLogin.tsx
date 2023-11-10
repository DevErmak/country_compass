import './form-login.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { LOGIN } from '../../shared/api/graphqlV1';
import { useLazyQuery } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { LoginFields, formSchemaLogin } from './model/loginFormSchema';
import Loader from '../../shared/ui/Loader';
import { setAuthentication } from '../../entities/viewer/model/user/infoUserSlice';
import { useDispatch } from 'react-redux';
import { log } from 'console';
type Props = {};

const FormLogin: React.FC<any> = ({}: Props) => {
  const [isActiveAnimate, setActiveAnimate] = useState(false);
  useEffect(() => {
    setFocus('login');
  }, []);

  const [cookie, setCookie] = useCookies(['accessToken']);

  const [loginUser, { loading, error, data: dataToken }] = useLazyQuery(LOGIN);
  // useEffect(() => {
  //   setActiveAnimate(false);
  //   setTimeout(() => setActiveAnimate(true), 600);
  // }, [error]);
  // useEffect(() => {
  //   console.log('!!!!---------------->dataToken', dataToken);
  //   if (dataToken !== undefined) {
  //     if (dataToken.login !== null) {
  //       if (dataToken.login.__typename === 'AccessToken') {
  //         console.log('kyky---------------->', dataToken.login.token);
  //         setCookie('accessToken', dataToken.login.token);
  //       }
  //     }
  //   }
  // }, [dataToken?.login]);

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

  const onSubmit: SubmitHandler<LoginFields> = async (data) => {
    console.log('---------------->qqqqqq');
    // const { data: dataToken, error:   } =
    await loginUser({
      variables: {
        login: data.login,
        password: data.password,
      },
    });
    if (error) {
      setActiveAnimate(false);
      setTimeout(() => setActiveAnimate(true), 600);
    }
    console.log('---------------->data', dataToken);
    if (data) setCookie('accessToken', dataToken.login.token);

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
};
export default FormLogin;
