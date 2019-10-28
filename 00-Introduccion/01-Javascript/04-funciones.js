    function imprimirMensaje(){
        console.log("Mensaje");

    }

    const respuesta =imprimirMensaje();
    console.log(respuesta); // void->undefined

    function imprimirRecibiendoMensaje(mensaje){
        if(typeof mensaje === 'number' || typeof mensaje ==='string'){
            console.log(`Mensaje ${mensaje}`);
            //console.log("Mensaje"+mensaje);
        }else{
            console.error("Error");
        }
        

    }

    const respuesta2=imprimirRecibiendoMensaje({a:1});
    //const respuesta = imprimirRecibiendoMensaje("Carolina");
    //const respuesta = imprimirRecibiendoMensaje(123);
    console.log(respuesta2); // void->undefined

    function imprimirReturnMensaje(mensaje){
        if(typeof mensaje === 'number' || typeof mensaje ==='string'){
            const impresion=`Mensaje ${mensaje}`;
            console.log(impresion);
            return impresion
        }else{
            console.error("Error");
        }
    }

    function sumarDosElementos(numeroUno,numeroDos){
        return numeroUno+ numeroDos;

    }

    console.log(sumarDosElementos(1,6));

    
    function sumarElementos(numeroUno,...otro){
        console.log(otro);
    }
    sumarElementos(1,2,3,4,5);

    function sumarVariosElementos(numeroUno,...aregloParamentrosInfinitos){
        console.log(aregloParamentrosInfinitos);
        if(aregloParamentrosInfinitos){
            return aregloParamentrosInfinitos
            .reduce(
                (valorInicial,valorActual)=>{
                    return valorInicial+valorActual
                },numeroUno
            );
        }else{
            return numeroUno
        }

    }

    const suma=sumarVariosElementos(1,2,3,4,5);
    console.log(suma)

    const restar =function (a,b){
        return a-b;
    }
    console.log(restar(6,5));

    const restar1=(a,b)=>{
        return a-b;
    }
    console.log(restar1(4,1));


    const transformarMayuscula=(letra) => letra.toUpperCase();

    const transformarMayuscula2=letra => letra.toUpperCase();

    //const filtroArreglo=arreglo.filter(a => a.id > 4);

    const arregloDeNumeros=[1,2,3,4,5];
    //destructurar el arreglo
    sumarElementos(...arregloDeNumeros);
    sumarDosElementos(...arregloDeNumeros);

    const arregloDeNumeros2=[6,7,8,9,10];

    const arregloUnido=[
        ...arregloDeNumeros,
        ...arregloDeNumeros2
    ];

    console.log(arregloUnido);

    const objetoCaro={
        nombre:'Adrian'
    }

    const objetoCevallos={
        apellido:'Cevallos'
    }

    const objetoCaroCevallos={
        ...objetoCaro,...objetoCevallos
    }
    console.log(objetoCaroCevallos);


    const oCCEnString=JSON.stringify(objetoCaroCevallos);
    console.log(oCCEnString);

    const oCCClonado=JSON.parse(oCCEnString);
    console.log(oCCEnString);

