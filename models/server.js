const express = require('express')
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {
    constructor() {
        this.app    = express()
        this.port   = process.env.PORT
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);

        this.path = {
        }


        //Middlewares
        this.middlewares()

        //Rutas de la aplicación
        this.routes();

        //sockets

        this.sockets();
    }


    middlewares() {
        //Directorio público
        this.app.use(cors())

        //Directorio público
        this.app.use(express.static("public"));

    }

    routes() {
        //this.app.use(this.path.auth,require('../routes/auth'))
    }

    sockets(){
        this.io.on('connection', socketController);


    }

    listen() {
        this.server.listen(this.port, () => {

            console.log(`Example app listening on port ${this.port}`)
        })
    }
}

module.exports = Server;