const fs = require( 'fs' );
const path = require( 'path' );
const database = path.resolve( __dirname, '../database/data.json' );

const guardarDB = ( data ) => {
    fs.writeFileSync( data, JSON.stringify( data, null, ' ' ) );
}

const leerDB = () => {
    // Verificamos que la base de datos existe
    if( !fs.existsSync( database ) ) {
        return null;
    }

    const info = fs.readFileSync( database, 'utf-8' );
    const data = JSON.parse( info );
    return data;
}

module.exports = {
    guardarDB,
    leerDB
}