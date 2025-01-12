
export interface ITask {
    title: string
}

export interface IUserTasks extends Document {
    email: string,
    tasks: ITask[]
}