import { Schema } from "mongoose"
import { IUser } from "../interfaces/IModels.js"

export const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        //match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        //match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+]).{8,16}$/,
        //maxlength: 16,
        //minlength: 8
        
    }
},{ 
    timestamps: true 
})