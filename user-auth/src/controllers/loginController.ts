import { NextFunction, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { CustomRequest } from "../interfaces/CustomRequest.js";
import { User } from "../models/index.js";

export const loginController = async (req: CustomRequest, res: Response, next: NextFunction): Promise<void> => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email })

		if (!user) {
			const error = new Error('Invalid email or password')
            error.name = 'InvalidEmailOrPassword'
            throw error
		}

		const passwordIsMatch = await bcrypt.compare(password, user.password)

		if (!passwordIsMatch) {
			const error = new Error('Invalid email or password')
            error.name = 'InvalidEmailOrPassword'
            throw error
		}

		const SECRET = process.env.SECRET_FOR_TOKEN as string

		const token = jwt.sign({ userId: user._id, email: user.email }, SECRET, { expiresIn: '7d' } )

		res.status(200).json({ token: token, message: 'OK' })
		
	} catch (error) {
		console.error(error)
		next(error)
	}
};
