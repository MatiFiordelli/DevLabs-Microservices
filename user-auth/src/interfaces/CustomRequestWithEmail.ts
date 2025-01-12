import { Request } from "express";

export interface CustomRequestWithEmail extends Request{
    email?: string
}