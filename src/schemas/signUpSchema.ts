import {z} from 'zod';

export const usernamevalidation = z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .regex(/^[a-zA-Z0-9]+$/, 'Username must only contain letters and numbers');
export const signUpSchema = z.object({
    username : usernamevalidation,
    email : z.string().email({
        message: 'Please enter a valid email address'
    }),
    password: z.string().min(6, 'Password must be at least 8 characters').max(20, 'Password must be less than 20 characters').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),

})