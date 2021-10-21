const Marcadores = require("./marcadores");

class Sockets {

    constructor( io ) {

        this.io = io;

        this.marcadores = new Marcadores();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            
            // Marcadores activos en el mapa
            socket.emit( 'marcadores-activos', this.marcadores.activos );

            // Marcador Nuevo
            socket.on('marcador-nuevo', ( marcador ) => {
                console.log(marcador);
                this.marcadores.agregarMarcador( marcador );

                // Emitir un EVENTO para todos EXCEPTO EL EMISOR
                socket.broadcast.emit('marcador-nuevo', marcador);
            });

            //Marcador Actualizado
            socket.on('marcador-actualizado', ( marcador ) => {
                this.marcadores.actualizarMarcador( marcador );

                // Emitir un EVENTO para todos EXCEPTO EL EMISOR
                socket.broadcast.emit('marcador-actualizado', marcador);
            });
        });
    }


}


module.exports = Sockets;