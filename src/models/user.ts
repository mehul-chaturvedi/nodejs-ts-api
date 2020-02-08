export interface User extends Document {
    username: string,
    firstName: string,
    lastName: string,
    isActive: boolean,
    password: string,
    mobile: string
}