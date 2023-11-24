import { useEffect } from 'react';
import './form-register.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_FAVORITECOUNTRIES, REGISTER, SET_FAVORITECOUNTRIES } from '../../shared/api/graphqlV1';

import { Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';
import { RegisterFields, formSchemaRegister } from './model/RegisterFormSchema';
import Loader from '../../shared/ui/loader';
import {
  addFavoriteCountry,
  setCountryBuffer,
  setModal,
} from '../../entities/viewer/model/user/infoUserSlice';
import { formModal } from '../../entities/viewer/model/user/types';
import { useDispatch } from 'react-redux';
import { getBufferCountry } from '../../entities/viewer/model/user/userSelectors';
import { useSelector } from 'react-redux';

type Props = {};

export default function FormRegister({}: Props) {
  const isEmptyLodash = require('lodash.isempty');
  const dispatch = useDispatch();

  useEffect(() => {
    setFocus('login');
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isValid },
  } = useForm<RegisterFields>({
    mode: 'all',
    resolver: zodResolver(formSchemaRegister),
  });

  const [registerUser] = useMutation(REGISTER);

  const [cookie, setCookie] = useCookies(['accessToken']);

  const onSubmit: SubmitHandler<RegisterFields> = async (data) => {
    const { data: dataToken } = await registerUser({
      variables: {
        createUser: {
          login: data.login,
          password: data.password,
        },
      },
    });
    if (dataToken && !isEmptyLodash(dataToken.registerUser)) {
      setCookie('accessToken', dataToken.registerUser.token);
      dispatch(setCountryBuffer({}));
      dispatch(setModal({ isActiveModal: false, formModal: formModal.login }));
    }

    reset();
  };
  return (
    <div className="container-register">
      <div className="modal-register">Register</div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-register">
        <div className={'error-login-reg '}>{errors.login && errors.login?.message}</div>
        <div>
          <label
            htmlFor="username"
            className={errors.login ? 'label-login-register not-valid' : 'label-login-register'}
          >
            Login:
          </label>
          <input
            {...register('login')}
            type="text"
            className={errors.login ? 'input-login-register not-valid' : 'input-login-register'}
          />
        </div>
        <div className={'error-password-reg'}>{errors.password && errors.password?.message}</div>
        <div>
          <label
            htmlFor="password"
            className={
              errors.password ? 'label-password-register not-valid' : 'label-password-register'
            }
          >
            Password:
          </label>
          <input
            {...register('password')}
            type="password"
            className={
              errors.password ? 'input-password-register not-valid' : 'input-password-register'
            }
          />
        </div>
        <div className={'error-confirm-password'}>
          {errors.confirmPassword && errors.confirmPassword?.message}
        </div>
        <div>
          <label
            htmlFor="username"
            className={
              errors.confirmPassword
                ? 'label-confirm-password  not-valid'
                : 'label-confirm-password'
            }
          >
            Confirm password:
          </label>
          <input
            {...register('confirmPassword')}
            type="password"
            className={
              errors.confirmPassword
                ? 'input-confirm-password-register not-valid'
                : 'input-confirm-password-register'
            }
          />
        </div>
        <div className="btn-register">
          <button type="submit" id="btn-register" disabled={!isValid}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
