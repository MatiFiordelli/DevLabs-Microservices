import mongoose from "mongoose";
import { TaskSchema } from "../schemas/index.ts";
import { IUserTasks } from "../interfaces/IModels.ts";

export const UserTasks = mongoose.model<IUserTasks>('UserTasks', TaskSchema)