import express, { Request, Response } from 'express'
import { UserSchema } from '../schemas/user.schema'
export class LoginController {

    /**
     * authenticate user login
     * @param req express request object
     * @param res express response object
     */
    async userLogin(req: Request, res: Response) {
        const {username, password} = req.body
        const user = await UserSchema.findOne({'username': username, 'password': password, 'isActive': true})

        if(!user) {
            return res.json('no user found')
        }
        res.json('user logged in')
    }

}