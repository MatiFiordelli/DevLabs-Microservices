import { NextFunction, Request, Response } from "express";
//import { User } from "../models";

export const createTaskController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	/* const { email, password } = req.body;

	try {
		const user = await User.findOne({ email })

		if (!user) {
			res.status(400).json({ message: 'Invalid email or password'})
			return
		}

		const passwordIsMatch = await bcrypt.compare(password, user.password)

		if (!passwordIsMatch) {
			res.status(400).json({ message: 'Invalid email or password'})
			return
		}

		const SECRET = process.env.SECRET_FOR_TOKEN as string

		const token = jwt.sign({ userId: user._id, email: user.email }, SECRET, { expiresIn: '7d' } )

		res.status(200).json({ token: token, message: 'OK' })
		
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: "Internal server error" });
	} */
};
