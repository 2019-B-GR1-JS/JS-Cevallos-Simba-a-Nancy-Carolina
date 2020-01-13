//Servicio es un SINGLETON: es decir solo 1 instancia del servicio

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService{
  //Inyeccion de dependencias
  constructor(
    //public readonly  http: HttpClient,
    private readonly  http: HttpClient ,
    //Servicio http: es el servicio con el que podremos hacer peticiones
  ){

  }
}

