import { NextFunction, Response } from 'express'
import { loginSchema } from '../validation/loginnSchema'
import { CustomRequest } from '../interfaces/CustomRequest'

export const validateCredentials = (req: CustomRequest, res: Response, next: NextFunction): void => {
    
    try {
        const result = loginSchema.safeParse(req.body)
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