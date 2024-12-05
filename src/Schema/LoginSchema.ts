import { z } from 'zod';

export const LoginSchema = z.object({
    email: z.string().email("Invalid email address").min(1, "Email Address is Required"),
    password: z.string().min(1, "Password is required")
});
