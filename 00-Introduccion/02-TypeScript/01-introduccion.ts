


// DUCK TYPING: infiere el tipo de dato

let nombre="Caro";
    //nombre=1

let fecha:Date; //Date->Clase
                // Tipo de dato "Date"
fecha=new Date();

let caro:Estudiante;
caro={
    nombre:"Carolina",
    edad:24
}

interface Estudiante {
    nombre:string;
    edad:number;
}

function mensaje(nombre: string):void {
    console.log('Hola',nombre);
}

function calculadora(numUno: number,
                     ...numero: number[]
):number {
    console.log('Hacer la calculadora')
    return numUno;
}

function universidad(
    nombre:string,
    edad?:number
):string {
    return`${nombre}Edad: ${edad}` ;
}

universidad("Caro",24);
universidad("caro");
