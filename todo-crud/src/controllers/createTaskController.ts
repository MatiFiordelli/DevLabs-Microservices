import { NextFunction, Request, Response } from "express";
import { UserTasks } from "../models/index.js";
import mongoose from "mongoose";

export const createTaskController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const { email, task } = req.body

	if (!email || !task) {
		const error = new Error('Email and Task are required')
		error.name = 'EmailAndTaskAreRequired'
		throw error
	}

	try {
		let userTasks = await UserTasks.findOne({ email: email });

		if (!userTasks) {
			userTasks = new UserTasks({
				email: email,
				tasks: []
			})
		}
		const taskExists = userTasks.tasks.some(t => t.title === task);
		
		if (taskExists) {
			const error = new Error() as Error & { code?: number };
			error.code = 11000 
			throw error

		} else {
			const newTask = { title: task, _id: new mongoose.Types.ObjectId() };
			userTasks.tasks.push(newTask);

			const updatedDocument = await userTasks.save();
			
			if (updatedDocument) {
				res.status(200).json({ updatedDocument, message: 'OK' })
			} else {
				const error = new Error('Unable to save task')
				error.name = 'UnableToSaveTask'
				throw error
			}
		}

	} catch (error) {
		const customError = error as Error & { code?: number };
  		console.error(customError);

  		if (customError.code === 11000) {
			const error = new Error('Task already exists')
			error.name = 'TaskAlreadyExists'
			next(error);
  		}
  		next(customError);
	}
};
