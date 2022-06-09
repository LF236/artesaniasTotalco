const Ramos = require('../models/Ramos');
const { leerDB } = require('./consultasDB');

const ramosClass = () => {
    let Ramos = new Ramos();
    let ramosFromDB = leerDB();
    return Ramos;
}

module.exports = ramosClass;