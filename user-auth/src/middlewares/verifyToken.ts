import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { CustomRequestWithEmail } from "../interfaces/CustomRequestWithEmail.js";

dotenv.config()

const SECRET = process.env.SECRET_FOR_TOKEN as string

export const verifyToken = (req: CustomRequestWithEmail, res: Response, next: NextFunction): void => { 
    const token = req.headers['authorization']?.split(" ")[1]; 
    if (!token) { 
        res.status(403).json({ message: "Token not provided" });
        return 
    } 
    
    jwt.verify(token, SECRET, (err, decoded) => { 

        if (err) { 
            res.status(401).json({ message: "Invalid Token" });
            return
        } 

        const objDecoded = decoded as jwt.JwtPayload & { email: string }
        
        req.email = objDecoded.email
        next(); 
    }); 
}