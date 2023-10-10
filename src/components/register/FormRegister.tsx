import { useEffect, useState } from 'react';
import './form-register.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ZodError, isValid, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { setAuthentication } from '../../store/user/infoUserSlice';
import { useDispatch } from 'react-redux';

type Props = {};

export default function FormLogin({}: Props) {
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
    console.log('wdwd', data);
    let userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
    if (userInfo !== null)
      if (userInfo.find((item: any) => item.name === data.login) === undefined) {
        console.log('---------------->goood');
        userInfo.push({ name: data.login, password: data.password, listFavorite: [] });
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        dispatch(setAuthentication(true));
      } else {
        console.log('---------------->такой пользователь есть');
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

  console.log('---------------->errors', errors);

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
// const addUser = (e: any) => {
//   e.preventDefault();
//   let userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
//   if (userInfo !== null)
//     if (userInfo.find((item: any) => item.name === login) === undefined) {
//       console.log('---------------->goood');
//       userInfo.push({ name: login, password: password, listFavorite: [] });
//       localStorage.setItem('userInfo', JSON.stringify(userInfo));
//     } else {
//       console.log('---------------->такой пользователь есть');
//     }
//   else {
//     userInfo = [];
//     userInfo.push({ name: login, password: password, listFavorite: [] });
//     localStorage.setItem('userInfo', JSON.stringify(userInfo));
//   }
// };
// const useValidation = (value: any, validations: any) => {
//   const [isEmpty, setEmpty] = useState(true);
//   const [minLengthError, setMinLengthError] = useState(true);
//   useEffect(() => {
//     for (const validation in validations) {
//       switch (validation) {
//         case 'minLength':
//           value.length < validations[validation]
//             ? setMinLengthError(true)
//             : setMinLengthError(false);
//           break;
//         case 'isEmpty':
//           value ? setEmpty(false) : setEmpty(true);
//           break;
//       }
//     }
//   }, [value]);
//   return {
//     isEmpty,
//     minLengthError,
//   };
// };
// const useInput = (initialValue: any, validations: any) => {
//   const [value, setValue] = useState(initialValue);
//   const [isDirty, setDirty] = useState(initialValue);
//   const valid = useValidation(value, validations);
//   const onChange = (e: any) => {
//     setValue(e.target.value);
//   };
//   const onBlur = (e: any) => {
//     setDirty(true);
//   };
//   return {
//     value,
//     onChange,
//     onBlur,
//     isDirty,
//     ...valid,
//   };
// };
// // const [login, setLogin] = useState('');
// // const [password, setPassword] = useState('');
// // const [confirmPassword, setConfirmPassword] = useState('');
// const email = useInput('', { isEmpty: true });
// const password = useInput('', { isEmpty: true, minLength: 6 });
// const confirmPassword = useInput('', { isEmpty: true });
// return (
//   <div className="container-register">
//     <div className="modal-register">Register</div>
//     {/* <form className="form-register" onClick={() => addUser}> */}
//     <form className="form-register">
//       <div>
//         <label
//           htmlFor="input-login"
//           className={email.isDirty && email.isEmpty ? 'label-login not-valid' : 'label-login'}
//         >
//           {email.isDirty && email.isEmpty ? <div>Login: Field is required</div> : 'Login:'}
//         </label>
//         <input
//           className={email.isDirty && email.isEmpty ? 'input-login not-valid' : 'input-login'}
//           // onChange={(e: any) => {
//           //   setLogin(e.target.value);
//           // }}
//           value={email.value}
//           onChange={(e) => email.onChange(e)}
//           onBlur={(e) => email.onBlur(e)}
//         />
//       </div>
//       <div>
//         <label
//           htmlFor="input-password"
//           className={
//             password.isDirty && password.isEmpty && password.minLengthError &&
//               ? 'label-password not-valid'
//               : 'label-password'
//           }
//         >
//           {password.isDirty && password.isEmpty ? (
//             <div>Password: Field is required</div>
//           ) : (
//             'Password:'
//           )}
//           {password.isDirty && password.minLengthError ? (
//             <div>Password: The password must be long</div>
//           ) : (
//             'Password:'
//           )}
//         </label>
//         <input
//           className={
//             password.isDirty && password.isEmpty ? 'input-password not-valid' : 'input-password'
//           }
//           type="password"
//           value={password.value}
//           onChange={(e) => password.onChange(e)}
//           onBlur={(e) => password.onBlur(e)}
//         />
//       </div>
//       <div>
//         <label
//           htmlFor="input-confirm-password"
//           className={
//             confirmPassword.isDirty && confirmPassword.isEmpty
//               ? 'label-confirm-password not-valid'
//               : 'label-confirm-password'
//           }
//         >
//           {confirmPassword.isDirty && confirmPassword.isEmpty ? (
//             <div>Confirm password: Field is required</div>
//           ) : (
//             'Confirm password:'
//           )}
//         </label>
//         <input
//           className={
//             confirmPassword.isDirty && confirmPassword.isEmpty
//               ? 'input-confirm-password not-valid'
//               : 'input-confirm-password'
//           }
//           type="password"
//           // onChange={(e: any) => setConfirmPassword(e.target.value)}
//           value={confirmPassword.value}
//           onChange={(e) => confirmPassword.onChange(e)}
//           onBlur={(e) => confirmPassword.onBlur(e)}
//         />
//       </div>
//       <div className="btn-register">
//         {/* <input type="submit" value="Register" id="btn-register" onClick={addUser} /> */}
//         <input type="submit" value="Register" id="btn-register" />
//       </div>
//     </form>
//   </div>
// );
// }
