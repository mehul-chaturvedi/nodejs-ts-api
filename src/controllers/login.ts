import express, { Request, Response } from 'express'
export class LoginController {

    /**
     * authenticate user login
     * @param req express request object
     * @param res express response object
     */
    userLogin(req: Request, res: Response) {
        // tslint:disable-next-line:no-console
        console.log(req.body)
    }

}