import express from 'express'
class Server {

    constructor() {
        this.startServer()
    }

    // tslint:disable-next-line: no-empty
    startServer() {
const app = express();
app.listen(3000, () => {
    // tslint:disable-next-line: no-console
    console.log('server running')
})
    }
}

export default new Server()