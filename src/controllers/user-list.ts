import { Request, Response } from "express";

export class UsersController {

    /**
     * creates an entry in DB of provided users
     * @param req express request object
     * @param res express response object
     */
    addUserList(req: Request, res: Response) {
        // tslint:disable-next-line:no-console
        console.log(req.body)
    }
}
