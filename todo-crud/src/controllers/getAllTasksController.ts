import { NextFunction, Request, Response } from "express";
import { UserTasks } from "../models/index.js";


export const getAllTasksController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email } = req.query;

    if (!email)	{
        const error = new Error('Email is required')
        error.name = 'EmailIsRequired'
        throw error
    }
    
    try {
        const userTasks = await UserTasks.findOne({ email: email })

        if (userTasks) {
            res.status(200).json({ message: 'OK', tasks: userTasks.tasks })
        } else {
            res.status(200).json({ message: 'User not found', tasks: [] })
        }
        
    } catch (error) {
        console.log(error)
        next(error)
    }
};
