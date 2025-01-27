import { Schema, Types } from "mongoose"
import { IUserTasks } from "../interfaces/IModels.js"

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
                trim: true,
                index: false
            },
            _id: {
                type: Types.ObjectId,
                auto: true
            }
        }
    ]
},{ 
    timestamps: true 
})