import { NextFunction, Request, Response } from 'express'
import fetch from 'node-fetch';
import { endpoints } from '../utils/endpoints.js'

export const validationToken =  async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        const error = new Error('Token not provided')
        error.name = 'TokenNotProvided'
        throw error
    }

    try {
        const response = await fetch(endpoints.verifyToken, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const error = new Error('Error verifying token')
            error.name = 'ErrorVerifyingToken'
            throw error
        }

        const data = await response.json();

        next()
    } catch (error) {
        console.error('Error fetching data:', error);
        next(error)
    }    
}