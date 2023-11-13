import { useEffect } from 'react';
import './form-register.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_FAVORITECOUNTRIES, REGISTER, SET_FAVORITECOUNTRIES } from '../../shared/api/graphqlV1';

import { Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';
import { RegisterFields, formSchemaRegister } from './model/RegisterFormSchema';
import Loader from '../../shared/ui/Loader';
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

  // const formSchemaRegister = z
  //   .object({
  //     login: z
  //       .string()
  //       .trim()
  //       .min(1, { message: 'Field is required' })
  //       .email('Email is not correct'),
  //     password: z
  //       .string()
  //       .min(6, { message: 'The password must be long' })
  //       .regex(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*).+$'), {
  //         message:
  //           'the password must contain at least 6 characters and have at least one capital letter and number',
  //       }),
  //     confirmPassword: z.string().min(6, { message: 'The password must be long' }),
  //   })
  //   .refine((schema) => (schema.password === schema.confirmPassword ? true : false), {
  //     message: 'passwords do not match',
  //     path: ['confirmPassword'],
  //   });

  // type RegisterFields = z.infer<typeof formSchemaRegister>;

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

  const fullInfoCountryBuffer = useSelector(getBufferCountry);
  const [cookie, setCookie] = useCookies(['accessToken']);
  // const [setFavoriteCountry] = useMutation(SET_FAVORITECOUNTRIES);
  // const [getFavoriteCountry] = useLazyQuery(GET_FAVORITECOUNTRIES);

  // useEffect(() => {
  //   if (data !== undefined) {
  //     if (data.registerUser !== null) {
  //       if (data.registerUser.__typename === 'AccessToken') {
  //         //console.log('gkj---------------->', data.login.token);
  //         setCookie('accessToken', data.registerUser.token);
  //       } else
  //         toast.error('you were unable to register', {
  //           position: 'bottom-left',
  //           autoClose: 1500,
  //           hideProgressBar: true,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: 'colored',
  //           transition: Zoom,
  //         });
  //     }
  //   }
  // }, [data]);

  const onSubmit: SubmitHandler<RegisterFields> = async (data) => {
    const { data: dataToken } = await registerUser({
      variables: {
        createUser: {
          login: data.login,
          password: data.password,
        },
      },
    });
    if (dataToken && !isEmptyLodash(dataToken)) {
      console.log('---------------->token', dataToken.registerUser.token);
      setCookie('accessToken', dataToken.registerUser.token);
      dispatch(setCountryBuffer({}));
      dispatch(setModal({ isActiveModal: false, formModal: formModal.login }));
    }

    // if (error)
    //   toast.error('you were unable to register', {
    //     position: 'bottom-left',
    //     autoClose: 1500,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: 'colored',
    //     transition: Zoom,
    //   });
    // else if (token && !isEmptyLodash(token)) {
    //   setCookie('accessToken', token.registerUser.token);
    // }

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
            className={errors.login ? 'label-login not-valid' : 'label-login'}
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
            className={errors.password ? 'label-password not-valid' : 'label-password'}
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
