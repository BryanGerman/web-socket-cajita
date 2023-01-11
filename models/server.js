const express = require('express')
const cors = require('cors');
const bodyParser = require("body-parser");
const { socketController } = require('../sockets/controller');

class Server {
    constructor() {
        this.app    = express()
        this.port   = process.env.PORT
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);

        this.path = {
            confirm: '/confirm',
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
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))

        //Directorio público
        this.app.use(express.static("public"));

    }

    routes() {
        this.app.use(this.path.confirm,require('../routes/confirm'))
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