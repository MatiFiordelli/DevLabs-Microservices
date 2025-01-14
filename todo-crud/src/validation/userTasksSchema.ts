import { z } from 'zod'

const taskSchema = z.object({ 
    title: z.string().trim().nonempty({message: 'Task must not be empty'}),
    _id: z.string().nonempty({message: 'Task id must not be empty'})
})

export const userTasksSchema = z.object({
    email: z
        .string()
        .email({message: 'Invalid email'})
        .refine(email=>email.trim()),
    
    tasks: z.array(taskSchema).optional()
})