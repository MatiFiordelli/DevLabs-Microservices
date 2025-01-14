import { NextFunction, Request, Response } from "express";
import { UserTasks } from "../models";

export const updateTaskController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {email, task} = req.body
    const { id } = req.params
    
    if (!email || !task) {
        const error = new Error('Email and Task are required')
        error.name = 'EmailAndTaskAreRequired'
        throw error
	}

    try {
        const result = await UserTasks.updateOne(
            { email: email, 'tasks._id': id }, 
            { $set: { 'tasks.$.title': task } } 
            // .$ - update the specific task, instead of the whole array (Positional operator)
            // $set - update the task, if the value doesn't exist, create it
        )

        if ( result.modifiedCount > 0) {
            res.status(200).json({ message: 'OK' })
        } else {
            const error = new Error('Document not found')
            error.name = 'DocumentNotFound'
            throw error
        }
        
    } catch (error) {
        console.error(error)
        next(error)
    }
};
