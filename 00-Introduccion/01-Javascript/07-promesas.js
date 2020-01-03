const fs= require('fs');

fs.readFile(
    './05-callbacks.js',
    'utf8',
    (error,datos)=>{//callback

    }
)

const sumarDosNumeros=(correcto)=>{
    return new Promise(
        (resolve,reject)=>{
            if(correcto){
                resolve('YEII');
            }else{
                reject('BUUU');
            }
        }
    );
}

const promesaSuma=sumarDosNumeros();

console.log('01)Iniciar');
promesaSuma
.then(
    (ok)=>{
        //console.log('ok',ok);
    }
)
.catch(
    (error)=>{
        //console.log('Error',error);
    }
);
console.log('02)Finalizar');

// Promesa con callback

const leerArchivo=(pathArchivo)=>{
    return new Promise(
        ((resolve, reject) => {
           //res->resolve,rej->reject
            fs.readFile(
                pathArchivo,
                'utf8',
                (error,datos)=>{
                    if(error){
                        reject(error);
                    }else{
                        resolve(datos);

                    }
                }
            );
        })
    )
}

leerArchivo('./06-callback.js')
    .then(
        (contenidoCallbacksjs)=>{
            //console.log(contenidoCallbacksjs);
            return leerArchivo('./04-funciones.js')
        }
    )
    .then(
        (contenidoCallbacksjs)=>{
            //console.log(contenidoCallbacksjs);
            return leerArchivo('./03-operadores.js')
        }
    )
    .then(
        (contenidoCallbacksjs)=>{
            //console.log(contenidoCallbacksjs);
            return leerArchivo('./02-objetos.js');
        }
    )
    .catch(
        (error)=>{
            //console.log('Error',error);
        }
    );

const nombreArchivo='./05-callback.js';
 //cuando se use codigo sincrono se debe utilizar try catch
try {
    const contenidoArchivo=fs.readFileSync(nombreArchivo);
    console.log(contenidoArchivo);
    console.log('Se leyó sincronamente');
}catch (error) {
    console.error('Error:',error);
}

//transformar una promesa a codigo SINCRONO!!!!

async function leerArchivoSync() {
    try{
        const contenido = await leerArchivo(nombreArchivo); // Promesa
        console.log(contenido);
        console.log('LEIMOS CON ASYNC AWAIT');
        return 1
    }catch (error) {
        console.error('Error ', error);
        return 0
    }
}
leerArchivoSync()
    .then(
        (numero)=>{
            console.log(numero); // 1
        }
    )
    .catch(
        (numero)=>{
            console.log(numero); // 0
        }
    ); // PROMESA