

const lblOnline  = document.querySelector("#lblOnline")
const lblOffline = document.querySelector("#lblOffline")
const txtMensaje = document.querySelector("#txtMensaje")
const btnEnviar  = document.querySelector("#btnEnviar")

const socket = io();


socket.on('connect', () => {

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
})

socket.on('disconnect', () => {
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
})

socket.on('enviar-mensaje', (mensaje) => {
    console.log(mensaje.mensaje)
})

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: socket.id,
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje',payload, ( id ) => {
        console.log("Desde el server", id)
    })

    
})