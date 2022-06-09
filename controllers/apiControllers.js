const ramosClass = require( '../helpers/cargarRamos' );
const Ramos = require('../models/Ramos');
const { leerDB } = require('../helpers/consultasDB');
const apiControllers = {
    index: ( req, res ) => {
        res.send( 'Hello World' );
    },

    obtenerTodos: ( req, res ) => {
        const ramos = new Ramos();
        ramos.cargarRamosFromArray( leerDB() );
        console.log( ramos.listadoRamosAr );
        res.send( ramos.listadoRamosAr  );
    },

    obtenerCarro: ( req, res ) => {
        const ramos = new Ramos();
        ramos.cargarRamosFromArray( leerDB() );
        let ramosCarro = ramos.listadoRamosAr;
        ramosCarro = ramosCarro.slice( 0, 5 );
        return res.send( ramosCarro );
    },

    getRamosXV: ( req, res ) => {
        const ramos = new Ramos();
        ramos.cargarRamosFromArray( leerDB() );
        let ramosAll = ramos.listadoRamosAr;
        let ramosXV = [];
        ramosAll.map( ramo => {
            if( ramo.tipo == 'ramos_xv' ) {
                ramosXV.push( ramo );
            }
        } )

        return res.send( ramosXV );
    },

    getRamosBoda: ( req, res ) => {
        const ramos = new Ramos();
        ramos.cargarRamosFromArray( leerDB() );
        let ramosAll = ramos.listadoRamosAr;
        let ramosBoda = [];
        ramosAll.map( ramo => {
            if( ramo.tipo == 'boda' ) {
                ramosBoda.push( ramo );
            }
        } )

        return res.send( ramosBoda );
    },

    getRamosPresentación: ( req, res ) => {
        const ramos = new Ramos();
        ramos.cargarRamosFromArray( leerDB() );
        let ramosAll = ramos.listadoRamosAr;
        let ramosPresentacion = [];
        ramosAll.map( ramo => {
            if( ramo.tipo == 'presentacion' ) {
                ramosPresentacion.push( ramo );
            }
        } )

        return res.send( ramosPresentacion );
    },

    getOfertas: ( req, res ) => {
        const ramos = new Ramos();
        ramos.cargarRamosFromArray( leerDB() );
        let ramosAll = ramos.listadoRamosAr;
        let ofertas = [];
        ramosAll.map( ramo => {
            if( ramo.oferta  ) {
                ofertas.push( ramo );
            }
        } )

        return res.send( ofertas );
    }
};

module.exports = apiControllers;