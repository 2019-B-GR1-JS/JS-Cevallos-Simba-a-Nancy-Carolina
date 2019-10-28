
/*
Un callBack es cuando se manda una funcion como parametro
 */

function calculo(numUno, numDos, funcionCalculo){
    const total = numUno + numDos;
    return funcionCalculo(numUno,numDos,total);
}

const numeroUno = 3;
const numeroDos = 5;

const suma= (numUno, numDos,total)=> {
    return total;
};

console.log(suma);  //Definicion FUNCTION
console.log(suma(1,2,3));   //Se ejecuta la FX

const resultadoCalculo = calculo(numeroUno, numeroDos, suma);

console.log(resultadoCalculo);


function forEachLocal(arreglo, funcion){
    for(let indiceInicial=0; indiceInicial<arreglo.length;indiceInicial++){
        funcion(arreglo[indiceInicial],indiceInicial,arreglo)
    }
}


forEachLocal(
    [1,2,3,4,5,6],
    (valorActual,indiceActual,arreglo)=>{
        console.log('valorActual',valorActual);
    }
)

function mapLocal(arreglo,operacion){
    let aux=[];
    for(let i=0;i<arreglo.length;i++){
        const respuesta=operacion(arreglo[i],i,arreglo);
        aux.push(respuesta);
    }
    return aux;
}

console.log(mapLocal(
    [1,2,3,4,5,6],
    (valorActual,indiceActual,arreglo)=>{
        return valorActual+5;
    }
))


function filterLocal(arreglo, operacion) {
    let aux=[];
    for(let i=0;i<arreglo.length;i++){
        if(operacion(arreglo[i],i,arreglo)){
            aux.push(arreglo[i]);
        }
    }
    return aux;
}

console.log(filterLocal(
    [1,2,3,4,5,6],
    (valorActual,indiceActual,arreglo)=>{
        if(valorActual>3)return true;
    }
))

function findLocal(arreglo, operacion) {
    for(let i=0;i<arreglo.length;i++){
        if(operacion(arreglo[i],i,arreglo)){
            console.log(arreglo[i]);
        }
    }
}

findLocal(
    [1,2,3,4,5,6],
    (valorActual)=>{
        if(valorActual==4)return true;
    }
)

function findIndexLocal(arreglo, operacion) {
    for(let i=0;i<arreglo.length;i++){
        if(operacion(arreglo[i],i,arreglo)){
            console.log(i);
        }
    }
}

findIndexLocal(
    [1,2,3,4,5,6],
    (valorActual)=>{
        if(valorActual==4)return true;
    }
)

function reduce(arreglo, operacion,valorInicial) {

    for(let i=0;i<arreglo.length;i++){
        valorInicial=operacion(valorInicial,arreglo[i],i,arreglo);
    }
    console.log(valorInicial);
}

reduce(
    [1,2,3,4,5,6],
    (valorInicial, valorActual,indice,array)=>{
        return valorInicial+valorActual;
    },
    0
)

function everyLocal(arreglo,operacion){
    let todos=true;
    for(let i=0;i<arreglo.length;i++){
        if(!operacion(arreglo[i],i,arreglo)){
            todos=false;
            break;
        }
    }
    console.log(todos)
}

everyLocal(
    [1,2,3,4,5,6,7],
    (valorActual, indice, array)=>{
        return valorActual>4;
    }
)

function someLocal(arreglo, operacion) {
    let alguno=false;
    for(let i=0;i<arreglo.length;i++){
        if(operacion(arreglo[i],i,arreglo)){
            alguno=true;
            break;
        }
    }
    console.log(alguno);
}

someLocal(
    [1,2,3,4,5],
    (valorActual,indice,array)=>{
        return valorActual>3
    }
)

