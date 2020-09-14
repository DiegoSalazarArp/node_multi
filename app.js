const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

// tipos de required
//const fs = require('fs') --> definicion de contasnte
//const fs = require('express') --> paquete no nativos de node
//const fs = require('./fs') --> archivos que nosotros escribimos en el proyecto


// let parametro = argv[2];
// let base = parametro.split('=')[1]