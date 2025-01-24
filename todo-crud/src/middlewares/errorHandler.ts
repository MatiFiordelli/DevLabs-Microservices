import { NextFunction, Request, Response } from "express";

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
): void => {
    
	if (err.name === "InvalidInputData") {
		res.status(400).json({
			message: err.message,
		});
		return;
	}

	if (err.name === "EmailAndTaskAreRequired") {
		res.status(400).json({
			message: err.message,
		});
		return;
	}

	if (err.name === "EmailIsRequired") {
		res.status(400).json({
			message: err.message,
		});
		return;
	}

	if (err.name === "TokenNotProvided") {
		res.status(401).json({
			message: err.message,
		});
		return;
	}

	if (err.name === "ErrorVerifyingToken") {
		res.status(401).json({
			message: err.message,
		});
		return;
	}

	if (err.name === "DocumentNotFound") {
		res.status(404).json({
			message: err.message,
		});
		return;
	}

	if (err.name === "UserNotFound") {
		res.status(404).json({
			message: err.message,
		});
		return;
	}

	if (err.name === "TaskAlreadyExists") {
		res.status(409).json({
			message: err.message,
		});
		return;
	}

	if (err.name === "MongodbUriNotDefined") {
		res.status(500).json({
			message: err.message,
		});
		return;
	} 

	res.status(500).json({ message: "Internal Server Error" });
};
