const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');

let listarArchivo = (base, limite = 10) => {

    console.log('========================='.blue);
    console.log(`====tabla del ${base}====`.blue);
    console.log('========================='.blue);

    if (!Number(base) && !Number(limite)) {
        console.log(`El valor de la base: ${base} y el valor del limite: ${limite}, no son nùmeros.`)
        return;
    }

    for (let i = 1; i <= limite; i++) {
        resultado = `${base} * ${i} = ${base * i}\n`
        console.log(resultado)
    }





}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`'El valor introducido ${base} no es numero'`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            resultado = `${base} * ${i} = ${base * i}\n`
            data += resultado
        }


        fs.writeFile(`tablas2/tabla-${base}`, data, (err) => {
            if (err)
                reject(err);
            resolve(`tabla-${base}-al-${limite}`);
        });

    })
}

module.exports = {
    crearArchivo,
    listarArchivo
}