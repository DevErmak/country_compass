import { useEffect, useState } from 'react';
import './form-register.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ZodError, isValid, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { setAuthentication } from '../../store/user/infoUserSlice';
import { useDispatch } from 'react-redux';

type Props = {};

export default function FormRegister({}: Props) {
  const dispatch = useDispatch();

  const formSchemaRegister = z
    .object({
      login: z
        .string()
        .trim()
        .min(1, { message: 'Field is required' })
        .email('Email is not correct'),
      password: z
        .string()
        .min(6, { message: 'The password must be long' })
        .regex(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*).+$'), {
          message:
            'the password must contain at least 6 characters and have at least one capital letter and number',
        }),
      confirmPassword: z.string().min(6, { message: 'The password must be long' }),
    })
    .refine((schema) => (schema.password === schema.confirmPassword ? true : false), {
      message: 'passwords do not match',
      path: ['confirmPassword'],
    });

  type RegisterFields = z.infer<typeof formSchemaRegister>;

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    trigger,
    formState: { isDirty, isSubmitting, errors, isValid },
  } = useForm<RegisterFields>({
    mode: 'all',
    resolver: zodResolver(formSchemaRegister),
  });

  const onSubmit: SubmitHandler<RegisterFields> = (data) => {
    let userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
    if (userInfo !== null)
      if (userInfo.find((item: any) => item.name === data.login) === undefined) {
        userInfo.push({ name: data.login, password: data.password, listFavorite: [] });
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        dispatch(setAuthentication(true));
      } else {
        alert('such a user exists');
      }
    else {
      userInfo = [];
      userInfo.push({ name: data.login, password: data.password, listFavorite: [] });
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      dispatch(setAuthentication(true));
    }

    reset();
  };

  useEffect(() => {
    setFocus('login');
  }, []);

  return (
    <div className="container-register">
      <div className="modal-register">Register</div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-register">
        <div>{errors.login && errors.login?.message}</div>

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
        <div>
          <label
            htmlFor="password"
            className={errors.password ? 'label-password not-valid' : 'label-password'}
          >
            {errors.password ? 'Password: ' + errors.password?.message : 'Password:'}
          </label>
          <input
            {...register('password')}
            type="password"
            className={
              errors.password ? 'input-password-register not-valid' : 'input-password-register'
            }
          />
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
            {errors.confirmPassword
              ? 'Confirm password: ' + errors.confirmPassword?.message
              : 'Confirm password:'}
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
