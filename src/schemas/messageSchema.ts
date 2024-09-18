import {z} from 'zod';
export const messageSchema = z.object({
    content : z
    .string()
    .max(200, 'Message must be less than 200 characters')
    .min(1, 'Message must be at least 1 character'),
})