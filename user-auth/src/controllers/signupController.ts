import { Response } from "express";
import { CustomRequest } from "../interfaces/CustomRequest";
import { User } from "../models";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupController = async (req: CustomRequest, res: Response): Promise<void> => {
    const {email, password} = req.body
    
    try {
        const doesTheUserAlreadyExist = await User.findOne({ email })

        if(doesTheUserAlreadyExist) {
            res.status(409).json({ message: 'User already exists' })
            return
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            email: email,
            password: hashedPassword
        })

        await newUser.save()

        const SECRET = process.env.SECRET_FOR_TOKEN as string

        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email },
            SECRET,
            { expiresIn: '7d' }   
        )

        res.status(201).json({ token: token, message: 'OK' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error'})
    }
}