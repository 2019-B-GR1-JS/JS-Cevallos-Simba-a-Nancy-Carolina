//Servicio es un SINGLETON: es decir solo 1 instancia del servicio

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService{
  //Inyeccion de dependencias

  url= environment.url+'/usuario';
  constructor(
    //public readonly  http: HttpClient,
    private readonly  _httpClient: HttpClient ,
    //Servicio http: es el servicio con el que podremos hacer peticiones
  ){  }

  editar(id: number,datos){
    const urlEditar = this.url + '/' + id;
    return this._httpClient
      .put(
        urlEditar,
        datos
      );
  }

  crear(datos) : Observable<any> {
    const urlCrear = this.url;
    return this._httpClient
      .post(
        urlCrear,
        datos
      );
  }


  buscar(busqueda: string) : Observable<any> {
    let consulta = '';
    if(busqueda ){
      consulta =  '?nombre=' + busqueda;
    }

    const urlBuscar = this.url + consulta;
    console.log(urlBuscar);
    return this._httpClient.get(urlBuscar);

  }

  eliminar(id: number): Observable<any> {
    const urlEliminar = this.url + '/' + id;
    return this._httpClient.delete(urlEliminar);

  }

}

