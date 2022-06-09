require( 'colors' );
require( 'dotenv' ).config();
const express = require( 'express' );
const app = express();
const path = require( 'path' );
const cors = require( 'cors' );
const apiRoutes = require( './routes/apiRoutes' );
const puerto = process.env.PORT;

// Route public
const public_path = path.resolve( __dirname + '/public' );
app.use( express.static( public_path ) );

// CORS
// Setting cors settings
app.use( cors() );

// Config Routes
app.use( '/api', apiRoutes );

// Server build React
// serve static files from react app 
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('*', (req, res) =>{
	res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});

app.listen( puerto, () => {
    console.log( `Server listening in http://localhost:${ puerto }`.america );
} );
