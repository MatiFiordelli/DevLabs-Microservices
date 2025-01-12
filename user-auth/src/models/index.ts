import mongoose from "mongoose";
import { UserSchema } from "../schemas";
import { IUser } from "../interfaces/IModels";


export const User = mongoose.model<IUser>('User', UserSchema)