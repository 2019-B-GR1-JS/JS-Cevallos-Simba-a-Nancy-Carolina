// JSON: Javascript object notation

// var nombre="caro";

//variables mutables
let nombre ="Caro";

//no mutables-inmutables(no cambian)
const cedula="1718010653";

const mensaje=`
    Siempre usar "const"
    Si ya toca usar "let"
    y nunca usar "var"
    `;
//primitivos

let nombres="Adrian";
console.log(typeof nombres,'nombres');
let numeros=1;
console.log(typeof numeros,'numeros');
numeros=1.1;
console.log(typeof numeros,'numero decimales');
let casado=false;
console.log(typeof casado,'casado');
let hijos =null;
console.log(typeof hijos,'hijos');
let mascotas=[];
console.log(typeof mascotas,'mascotas');
let hermana={};
console.log(typeof hermana,'hermana');

//Falsy
if(""){
    console.log("Truty");
}else{
    console.log("Falsy");
}

//JSON

const adrian ={
    "nombre":'Carolina',
    "apellido":"Cevallos",
    "edad":24,
    "casado":false,
    "hijod":null,
    "mascotas":[
        {
            "nombre":"cachetes"
        }
    ]
}