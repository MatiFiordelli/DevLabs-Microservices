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

	if (err.name === "MongodbUriNotDefined") {
		res.status(500).json({
			message: err.message,
		});
		return;
	} 

	res.status(500).json({ message: "Internal Server Error" });
};
