import { Schema } from "mongoose"
import { IUserTasks } from "../interfaces/IModels"

export const TaskSchema = new Schema<IUserTasks>({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    tasks: [
        {
            title: {
                type: String,
                required: true,
                trim: true
            }
        }
    ]
},{ 
    timestamps: true 
})