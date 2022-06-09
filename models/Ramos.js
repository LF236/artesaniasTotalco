const Ramo = require( './ramo' );

class Ramos {
    __listado = {};

    constructor() {
        this.__listado = {};
    }

    cargarRamosFromArray( lista_ramos = [] ) {
        lista_ramos.forEach( ramo => {
            this.__listado[ ramo.id ] = ramo;
        } )
    }

    get listadoRamosAr() {
        let arr = [];
        Object.keys( this.__listado ).forEach( key => {
            arr.push( this.__listado[ key ] );
        } )
        return arr;
    }
}

module.exports = Ramos;