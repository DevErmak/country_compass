import { z } from 'zod';

export const formSchemaRegister = z
  .object({
    login: z.string().trim().min(1, { message: 'Field is required' }).email('Email is not correct'),
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

export type RegisterFields = z.infer<typeof formSchemaRegister>;
