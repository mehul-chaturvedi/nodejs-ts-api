import mongoose, { Schema } from 'mongoose'

export const userSchema: Schema = new Schema({
    username: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    isActive: {type: Boolean, required: true},
    password: {type: String, required: true},
    mobile: {type: String, required: true}
});

export const UserSchema = mongoose.model('user-list', userSchema)