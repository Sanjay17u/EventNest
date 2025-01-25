import mongoose from "mongoose";
import validator from 'validator'

const messageSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Name Required"],
        minLength: [3, "Name Must Contain At least 3 Character"],
        lowercase: true
    },
    
    email: {
        type: String,
        required: [true, "Email Required"],
        validate: [validator.isEmail, "Please Provide valid email!"]
    },
    subject: {
        type: String,
        required: [true, "Subject Required"],
        minLength: [5, "Subject Must Contain At least 5 Character"],
    },
    message: {
        type: String,
        required: [true, "Message Required"],
        minLength: [10, "Message Must Contain At least 10 Character"],
    },

}, { timestamps: true })

export const Message = mongoose.model("Message", messageSchema)