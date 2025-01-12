import { z } from 'zod'

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+]).{8,16}$/

export const loginSchema = z.object({
    email: z
        .string()
        .email({message: 'Invalid email'}).refine(email=>email.trim()),
    password: z
        .string()
        .min(8, {message: 'Password must be at least 8 characters long'})
        .max(16, {message: 'Password must be at most 16 characters long'})
        .regex(passwordRegex, {message: 'Password must contain at least one uppercase letter, on lowercase letter, one number and one special character'})
})