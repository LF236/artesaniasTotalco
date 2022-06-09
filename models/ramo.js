const { v4: uuid } = require( 'uuid' );

class Ramo {
    id = '';
    precio = '';
    ruta = '';
    tipo = '';

    constructor( precio, ruta, tipo ) {
        this.id = uuid();
        this.precio = precio;
        this.ruta = ruta;
        this.tipo = tipo;
    }

}

module.exports = Ramo;