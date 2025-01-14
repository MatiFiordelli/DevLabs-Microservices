import { Schema } from "mongoose"

export interface ITask {
    title: string,
    _id: Schema.Types.ObjectId
}

export interface IUserTasks extends Document {
    email: string,
    tasks: ITask[]
}