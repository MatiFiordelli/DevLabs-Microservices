import mongoose from "mongoose";
import { TaskSchema } from "../schemas/index";
import { IUserTasks } from "../interfaces/IModels";

export const UserTasks = mongoose.model<IUserTasks>('UserTasks', TaskSchema)