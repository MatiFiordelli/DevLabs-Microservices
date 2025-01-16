import { NextFunction, Request, Response } from "express";
import { CustomRequestWithEmail } from "../interfaces/CustomRequestWithEmail.js";

export const verifiedTokenOkController = (req: CustomRequestWithEmail, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "OK", email: req.email })
}