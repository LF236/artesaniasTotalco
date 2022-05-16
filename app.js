require( 'colors' );
require( 'dotenv' ).config();
const express = require( 'express' );
const app = express();
const path = require( 'path' );
const apiRoutes = require( './routes/apiRoutes' );
const puerto = process.env.PORT;

// Route public
const public_path = path.resolve( __dirname + '/public' );
app.use( express.static( public_path ) );
// Config Routes
app.use( '/api', apiRoutes );

app.listen( puerto, () => {
    console.log( `Server listening in http://localhost:${ puerto }`.america );
} );
