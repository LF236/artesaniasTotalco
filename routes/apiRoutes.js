const express = require( 'express' );
const apiControllers = require('../controllers/apiControllers');
const route = express.Router();

route.get( '/', apiControllers.index );

module.exports = route;