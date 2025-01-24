import { NextFunction, Request, Response } from "express";
import { UserTasks } from "../models/index.js";

export const updateTaskController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email, task } = req.body
    const { id } = req.params

	if (!email || !task) {
		const error = new Error('Email and Task are required')
		error.name = 'EmailAndTaskAreRequired'
		throw error
	}

	try {
		const updatedDocument = await UserTasks.findOneAndUpdate(
			{ email: email, 'tasks.title': { $ne: task }  }, //$ne - query operator (not equal)
			{ $set: { 'tasks.$[taskPosition].title': task} },
			{ 
                arrayFilters: [{ 'taskPosition._id': id }], // filter array element to be updated
				new: true,    //new - return updated document
				runValidators: true //runValidators - ensure document validation
			}
		)

		if (updatedDocument) {
			res.status(200).json({ updatedDocument, message: 'OK' })
		} else {
			const error = new Error('Task already exists')
            error.name = 'TaskAlreadyExists'
            throw error
		}

	} catch (error) {
        
		const customError = error as Error & { code?: number };
  		console.error(customError);

  		if (customError.code === 11000) { //it will never happen because of the filter, it needs to be removed!
			const error = new Error('Task already exists')
			error.name = 'TaskAlreadyExists'
			next(error);
  		}
  		next(customError);
	}
};
