import { z } from 'zod';

export const ContactFormSchema = z.object({
    name: z.string().min(1, "Name is Required"),
    email: z.string().email("Invalid email address").min(1, "Email Address is Required"),
    company: z.string().optional(),
    country: z.string().min(1, "Name is Required"),
    phone: z.string().min(1, "Name is Required"),
    message: z.string().min(1, "Name is Required"),
});
