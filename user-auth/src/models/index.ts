import mongoose from "mongoose";
import { UserSchema } from "../schemas/index.js";
import { IUser } from "../interfaces/IModels.js";


export const User = mongoose.model<IUser>('User', UserSchema)