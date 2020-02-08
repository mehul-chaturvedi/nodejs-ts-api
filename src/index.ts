import express, { response, request } from 'express'
import * as bodyParser from 'body-parser'
import { LoginController } from './controllers/login';
import { UsersController } from './controllers/user-list';
class Server {
private loginController = new LoginController()
private userListController = new UsersController()
    constructor() {
        this.startServer()
    }

/**
 * userd to start server
 */
    private startServer() {
        const app: express.Application = express();
        const router: express.Router = express.Router()
        app.listen(3000, () => {
            // tslint:disable-next-line: no-console
            console.log('server running')
        })

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}))
        app.use('/', router)
        // user login route
        router.post('/login', this.loginController.userLogin);
        // create user list route
        router.post('/users', this.userListController.addUserList)
    }
}

export default new Server()