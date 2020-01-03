
//el lenguaje de js no puede levantar más hilos

const fileSystem=require('fs');
console.log('1) Inicniando')
/*fileSystem.readFile(
    './05-callback.js',
    'utf8',
    ()=>{//callback(async -sync)
        console.log("3)leyendo archivo");
    }
);
console.log('2) Finalizando');*/

// Aqui se produce un callback hell
fileSystem.readFile(
    './05-callback.js',
    'utf8',
    (error,datos)=>{
        if(error){
            console.log({
                mensaje:'Error leyendo archivo',
                //error:error,
                error,
            })
        }else{
            console.log('Callbacks: ',datos);
            fileSystem.readFile(
                './04-funciones.js',
                'utf8',
                leerFunciones
            );

        }

    }
);
//para solucionar un callback hell
fileSystem.readFile(
    './05-callback.js',
    'utf8',
    leerCallbaks
);
function leerCallbaks(error, datos) {
    if(error){
        console.log({
            mensaje:'Error leyendo archivo callback',
            //error:error,
            error,
        })
    }else{
        console.log('Callbacks: ',datos);
        fileSystem.readFile(
            './04-funciones.js',
            'utf8',
            leerFunciones
        );
    }
}
function leerFunciones(error,datos) {
    if(error){
        console.log({
            mensaje:'Error leyendo funciones',
            //error:error,
            error,
        })
    }else{
        console.log('Funciones: ',datos);
        fileSystem.readFile(
            './03-operadores.js',
            'utf8',
            leerOperadores
        );
    }
}

function leerOperadores(error, datos) {
    if(error){
        console.log({
            mensaje:'Error leyendo operadores',
            //error:error,
            error,
        })
    }else{
        console.log('Operadores: ',datos);
        fileSystem.readFile(
            './02-objetos.js',
            'utf8',
            leeObjetos
        );
    }
}

function leeObjetos(error, datos) {
    if(error){
        console.log({
            mensaje:'Error leyendo Objetos',
            //error:error,
            error,
        })
    }else{
        console.log('Objetos: ',datos);
        fileSystem.readFile(
            './01-variables.js',
            'utf8',
            leerVariables
        );
    }
}

function leerVariables(error, datos) {
    if(error){
        console.log({
            mensaje:'Error leyendo variables',
            //error:error,
            error,
        })
    }else{
        console.log('Variables: ',datos);

    }
}


