import { NextFunction, Request, Response } from 'express'
import { userTasksSchema } from '../validation/userTasksSchema'
//import { CustomRequest } from '../interfaces/CustomRequest'

export const validationUserTasksData = (req: Request, res: Response, next: NextFunction): void => {
    
    try {
        const result = userTasksSchema.safeParse(req.body)
        if(!result.success){
            const error = new Error('Invalid input data')
            error.name = 'InvalidInputData'
            throw error
        }
        next()
    } catch (error) {
        next(error)
    }
}