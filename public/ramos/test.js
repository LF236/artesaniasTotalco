const fs = require( 'fs' );
const { v4: uuid } = require( 'uuid' );
fs.readdir( './ramos_xv', ( err, archivos ) => {
    if( err ) {
        onerror( err );
        return;
    }
    //
    const data = [];
    archivos.forEach( archivo => {
        const aux = {
            id: uuid(),
            precio: archivo.split( '.' )[0],
            ruta: `ramos_xv/${ archivo }`,
            tipo: 'ramos_xv'
        };
        data.push( aux );
    } )

    const jsonFile = JSON.stringify( data, null, ' ' );
    console.log( jsonFile );
        
});