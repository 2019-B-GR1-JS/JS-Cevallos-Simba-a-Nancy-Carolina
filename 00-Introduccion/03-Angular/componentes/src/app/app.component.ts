import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fecha='N';
  sueldo=230;
  universidad='ESCUELA POLITECNICA NACIONAL'
  title = 'componentes';

  arregloObjetos=[
    {
      id:1,
      "nombre":"Carolina",
      apellido:"Cevallos",
      sueldo:12.12,
      casado:false,
      carro:null,
      comida:"https://www.ecuavisa.com/sites/default/files/fotos/2019/01/03/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg",
      ojos:undefined,

    },
    {
      id:2,
      "nombre":"Nancy",
      apellido:"Simbaña",
      sueldo:44.12,
      casado:true,
      carro:null,
      comida:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjssIer65fmAhWCpFkKHQYfAOkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.eltelegrafo.com.ec%2Fnoticias%2Fregional%2F1%2F20-platos-tipicos-seran-presentados&psig=AOvVaw0uFX0pg599y6ITmKBmCvOZ&ust=1575406062331847",
      ojos:undefined,

    },
    {
      id:2,
      "nombre":"Sergio",
      apellido:"Lizano",
      sueldo:33.12,
      casado:false,
      carro:null,
      comida:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwio_MC165fmAhUmwVkKHZH-CycQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.tripadvisor.com%2FLocationPhotoDirectLink-g297476-d6767458-i222484489-Ecotours_Boquilla-Cartagena_Cartagena_District_Bolivar_Department.html&psig=AOvVaw0uFX0pg599y6ITmKBmCvOZ&ust=1575406062331847",
      ojos:undefined,

    }
  ]

  imprimirSueldo(sueldo:string){
    console.log(sueldo);
  }
  imprimirResultados(numeroUno, numeroDos){
    let suma = numeroUno + numeroDos;
    console.log('Suma:', suma);
  }



}
let arregloNumber=[1,2,3,4];
  arregloNumber=["a","b","c"];
