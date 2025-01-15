import mongoose from "mongoose";
import { TaskSchema } from "../schemas/index.js";
import { IUserTasks } from "../interfaces/IModels.js";

export const UserTasks = mongoose.model<IUserTasks>('UserTasks', TaskSchema)