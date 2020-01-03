import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent implements OnInit, OnDestroy {

  @Input()
  public titulo:string;

  @Input()
  public imagen:string;

  @Input()
  public textoImagen:string;

  @Input()  // Atributo Propiedad
  public textoBoton:string;

  @Output() // EVENTO
  public cambioSueldo = new EventEmitter();

  @Input() numUno: number;
  @Input() numDos: number;

  suma = 0;
  resta = 0;
  multiplicacion = 0;
  division = 0;

  constructor() {
    console.log('Instanciando');
  } // instancia la clase (Ayuda -> Angular)

  ngOnInit(): void { // La clase está lista
    console.log('Esta listo');
    console.log(this.titulo);
    console.log(this.textoImagen);
    console.log(this.textoBoton);
  }

  ngOnDestroy(): void { // La clase esta destruida
  }

  saludar(){
    alert("HOLAAAAAAAAAAAAAAA");
  }

  aumentarSueldo(){
    // this.textoBoton = this.textoBoton + 1;
    this.textoBoton = (Number(this.textoBoton) + 1).toString();
    this.cambioSueldo.emit(this.textoBoton);
    // this.textoBoton = (+this.textoBoton + 1).toString();
  }

  ancho=200;
  aumentarTamanio() {
    this.ancho = this.ancho + 10;
    console.log(this.ancho);
  }

  escucharNum(event) {
    console.log(event.srcElement.value);
    this.numUno = Number(event.srcElement.value);
    //this.enviarNumeroAOperaciones.emit(this.numUno);
    this.calcular();
  }

  escucharNum2(event) {

    this.numDos = Number(event.srcElement.value);
    console.log(this.numDos);
    //this.enviarNumeroAOperaciones.emit(this.numDos);
    this.calcular();
  }

  calcular() {
    let num1 = Number(this.numUno);
    let num2 = Number(this.numDos);

    console.log(num1 + num2);
    this.suma = num1 + num2;

    this.resta = num1 - num2;
    this.multiplicacion = num1 * num2;
    this.division = num1 / num2;

  }


}


// class (etiqueta html) (web-component)
// Instanciar a la clase
// Clase esta lista
// Clase se destruye
