import { NextFunction, Request, Response } from "express";
import { UserTasks } from "../models/index.js";
import mongoose from "mongoose";

export const updateTaskController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email, task } = req.body;
    const { id } = req.params;
    const objectId = new mongoose.Types.ObjectId(id);

    if (!email || !task) {
        const error = new Error('Email and Task are required');
        error.name = 'EmailAndTaskAreRequired';
        throw error;
    }

    try {
        let userTasks = await UserTasks.findOne({ email: email });

        if (!userTasks) {
            const error = new Error('Document not found');
            error.name = 'DocumentNotFound';
            throw error;
        }

        const taskToUpdate = userTasks.tasks.find((t) => t._id.toString() === id);

        if (!taskToUpdate) {
            const error = new Error('Task not found');
            error.name = 'TaskNotFound';
            throw error;
        }

        const taskExists = userTasks.tasks.some(t => t.title === task);

        if (taskExists) {
            const error = new Error() as Error & { code?: number };
            error.code = 11000;
            throw error;
        }

        taskToUpdate.title = task;

        const updatedDocument = await userTasks.save();

        if (updatedDocument) {
            res.status(200).json({ updatedDocument, message: 'OK' });
        } else {
            const error = new Error('Unable to save task');
            error.name = 'UnableToSaveTask';
            throw error;
        }
    } catch (error) {
        const customError = error as Error & { code?: number };
        console.error(customError);

        if (customError.code === 11000) {
            const error = new Error('Task already exists');
            error.name = 'TaskAlreadyExists';
            next(error);
        } else {
            next(customError);
        }
    }
};