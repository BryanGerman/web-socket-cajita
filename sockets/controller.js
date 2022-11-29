const socketController = (socket) => {

    console.log("Cliente conectado", socket.id)

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id)
    });

    socket.on('enviar-mensaje', async (mensaje, callback) => {

        const id = 123456;
        callback(id)
        
        socket.emit("enviar-mensaje", mensaje.mensaje)
        socket.broadcast.emit("enviar-mensaje", mensaje.mensaje)
    })
}

module.exports = {
    socketController
}