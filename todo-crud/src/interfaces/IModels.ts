import { Types } from "mongoose"

export interface ITask {
    title: string,
    _id: Types.ObjectId
}

export interface IUserTasks extends Document {
    email: string,
    tasks: ITask[]
}