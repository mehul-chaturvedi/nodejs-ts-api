import { Request, Response } from "express";
import { UserSchema } from "../schemas/user.schema";
import { User } from "../models/user";

export class UsersController {

    /**
     * creates an entry in DB of provided users
     * @param req express request object
     * @param res express response object
     */
    async addUserList(req: Request, res: Response) {
        const users = req.body
        let response;
        if(users.length) {
            users.forEach(async (user: User) => {
                const userArray = new UserSchema(user)
                response = await userArray.save()
            })
        } else {
             const userArray = new UserSchema(users)
             response = await userArray.save()
        }

            res.json('users added')
    }
}

export default new UsersController()