import { z } from 'zod';

export const formSchemaLogin = z.object({
  login: z.string().trim().min(1, { message: 'Field is required' }).email('Email is not correct'),
  password: z.string().min(1, { message: 'Field is required' }),
});

export type LoginFields = z.infer<typeof formSchemaLogin>;
