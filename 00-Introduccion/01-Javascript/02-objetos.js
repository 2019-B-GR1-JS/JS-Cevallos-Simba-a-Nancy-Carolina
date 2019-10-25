    // 02-objetos.js

    //todos los objetos tienen llave y un valor

    const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('arreglo', arreglo);


    arreglo.push(11);
    console.log('arreglo', arreglo);
    arreglo.pop();
    console.log('arreglo', arreglo);

    arreglo.splice(1, 0, 1.1);
    console.log('arreglo', arreglo);
    arreglo.unshift(0);
    console.log('arreglo', arreglo);

    const respuestaIndice = arreglo.indexOf(4);
    console.log(respuestaIndice)

    let arregloNumber = [1, 2, 3, 4];
    arregloNumber = ["a", "b", "c"];
    arregloNumber = [1, "a", true, false];

    arreglo.splice(respuestaIndice, 1)
    console.log('arreglo', arreglo);


    /*
    function suma(a, b) {
        if (typeof (a) === 'number' && typeof (b) === 'number') {
            return a + b;
            console.log(a + b);
        } else {
            return 0;
            console.log("valio gaver");
        }
    }
    suma(5, 5);
    */