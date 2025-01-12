import mongoose from "mongoose";
import { TaskSchema } from "../schemas";
import { IUserTasks } from "../interfaces/IModels";

export const UserTasks = mongoose.model<IUserTasks>('UserTasks', TaskSchema)