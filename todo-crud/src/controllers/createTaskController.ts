import { NextFunction, Request, Response } from "express";
import { UserTasks } from "../models/index.js";

export const createTaskController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const { email, task } = req.body

	if (!email || !task) {
		const error = new Error('Email and Task are required')
		error.name = 'EmailAndTaskAreRequired'
		throw error
	}

	try {
		const updatedDocument = await UserTasks.findOneAndUpdate(
			{ email: email, 'tasks.title': { $ne: task }  }, //$ne - query operator (not equal)
			{ $push: { tasks: {title: task}} },
			{ 
				new: true,    //new - return updated document
				upsert: true,  //upsert - if there is no document with this email, create one
				runValidators: true //runValidators - ensure document validation
			}
		)

		//await UserTasks.syncIndexes()
		
		if (updatedDocument) {
			res.status(200).json({ updatedDocument, message: 'OK' })
		} else {
			const error = new Error('Document not found')
            error.name = 'DocumentNotFound'
            throw error
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
