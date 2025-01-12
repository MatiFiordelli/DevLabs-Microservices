import { Request } from "express";
import { Db } from "mongodb";

export interface CustomRequest extends Request {
    db?: Db
}