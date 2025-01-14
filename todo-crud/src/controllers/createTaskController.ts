import { NextFunction, Request, Response } from "express";
import { UserTasks } from "../models";

export const createTaskController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const { email, task } = req.body

	if (!email || !task) {
		const error = new Error('Email and Task are required')
		error.name = 'EmailAndTaskAreRequired'
		throw error
	}

	try {
		const updatedDocument = await UserTasks.findOneAndUpdate(
			{ email: email }, 
			{ $push: { tasks: {title: task}} },
			{ 
				new: true,    //new - return updated document
				upsert: true  //upsert - if there is no document with this email, create one
			}
		)

		if (updatedDocument) {
			res.status(200).json({ updatedDocument, message: 'OK' })
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
