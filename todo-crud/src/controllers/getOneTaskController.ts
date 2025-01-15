import { NextFunction, Request, Response } from "express";
import { UserTasks } from "../models/index.js";

export const getOneTaskController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email } = req.query;
    const { id } = req.params

    if (!email || !id) {
        const error = new Error('Email and Task are required')
        error.name = 'EmailAndTaskAreRequired'
        throw error
    }

    try {
        const userTasks = await UserTasks.findOne({ email: email})
        
        if (userTasks) {
            const foundTask = userTasks.tasks.find((t)=>t._id.toString()===id)

            if (foundTask) {
                res.status(200).json({ message: 'OK', task: foundTask})
            } else {
                const error = new Error('Document not found')
                error.name = 'DocumentNotFound'
                throw error
            }
        } else {
            const error = new Error('User not found')
            error.name = 'UserNotFound'
            throw error
        }
        
    } catch (error) {
        console.error(error)
        next(error)
    }
};
