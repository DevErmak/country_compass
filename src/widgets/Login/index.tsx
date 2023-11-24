import './form-login.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { GET_FAVORITECOUNTRIES, LOGIN, SET_FAVORITECOUNTRIES } from '../../shared/api/graphqlV1';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { LoginFields, formSchemaLogin } from './model/loginFormSchema';
import Loader from '../../shared/ui/loader';
import {
  addFavoriteCountry,
  setAuthentication,
  setCountryBuffer,
  setModal,
} from '../../entities/viewer/model/user/infoUserSlice';
import { useDispatch } from 'react-redux';
import { log } from 'console';
import { formModal } from '../../entities/viewer/model/user/types';
import { useSelector } from 'react-redux';
import { getBufferCountry } from '../../entities/viewer/model/user/userSelectors';
import { Zoom, toast } from 'react-toastify';
import isEmptyLodash from 'lodash.isempty';

type Props = {};

const FormLogin: React.FC<any> = ({}: Props) => {
  const [setFavoriteCountry] = useMutation(SET_FAVORITECOUNTRIES);
  const [getFavoriteCountry] = useLazyQuery(GET_FAVORITECOUNTRIES);
  const [loginUser] = useLazyQuery(LOGIN);
  const fullInfoCountryBuffer = useSelector(getBufferCountry);
  const [cookie, setCookie] = useCookies(['accessToken']);

  const [isActiveAnimate, setActiveAnimate] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setFocus('login');
  }, []);

  useEffect(() => {
    async function addBufferCountryInFavorite() {
      if (fullInfoCountryBuffer && !isEmptyLodash(fullInfoCountryBuffer)) {
        await setFavoriteCountry({
          context: {
            headers: {
              ...Headers,
              authorization: `Bearer ${cookie.accessToken}`,
            },
          },
          variables: {
            createFavoriteCountry: {
              coatOfArms: fullInfoCountryBuffer.coatOfArms,
              currencies: fullInfoCountryBuffer.currencies,
              flags: fullInfoCountryBuffer.flags,
              flagsAlt: fullInfoCountryBuffer.flagsAlt || '',
              languages: fullInfoCountryBuffer.languages,
              nameCapital: fullInfoCountryBuffer.nameCapital,
              nameCountry: fullInfoCountryBuffer.nameCountry,
              population: fullInfoCountryBuffer.population,
              region: fullInfoCountryBuffer.region,
            },
          },
        });
        const { data: listFavoriteCountries } = await getFavoriteCountry({
          context: {
            headers: {
              ...Headers,
              authorization: `Bearer ${cookie.accessToken}`,
            },
          },
        });
        dispatch(addFavoriteCountry(listFavoriteCountries.getMe.FavoriteCountry));
        dispatch(setCountryBuffer({}));
      }
    }
    addBufferCountryInFavorite();
  }, [cookie]);

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
    const { data: dataToken, error } = await loginUser({
      variables: {
        login: data.login,
        password: data.password,
      },
    });
    if (error) {
      setActiveAnimate(false);
      setTimeout(() => setActiveAnimate(true), 600);
    }
    if (!isEmptyLodash(dataToken.login)) {
      setCookie('accessToken', dataToken.login.token);
      dispatch(setModal({ isActiveModal: false, formModal: formModal.login }));
    } else {
      setActiveAnimate(false);
      setTimeout(() => setActiveAnimate(true), 600);
    }

    reset();
  };
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
};
export default FormLogin;
