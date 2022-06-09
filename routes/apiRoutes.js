const express = require( 'express' );
const apiControllers = require('../controllers/apiControllers');
const route = express.Router();

route.get( '/', apiControllers.index );
route.get( '/getAllRamos', apiControllers.obtenerTodos );
route.get( '/getRamosCarro', apiControllers.obtenerCarro );
route.get( '/getRamosXv', apiControllers.getRamosXV );
route.get( '/getRamosBoda', apiControllers.getRamosBoda );
route.get( '/getRamosPresentacion', apiControllers.getRamosPresentación );
route.get( '/getOfertas', apiControllers.getOfertas );

module.exports = route;