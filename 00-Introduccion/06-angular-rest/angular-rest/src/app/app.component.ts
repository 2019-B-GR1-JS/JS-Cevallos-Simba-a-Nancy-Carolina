import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FILAS} from "./constantes/numero-filas-por-tabla";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-rest';
  url = 'http://localhost:1337';
  usuarios = [];
  FILAS = FILAS;
  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';
  passwordFiltrado = '';
  //INYECCION DE DEPENDENCIAS
  // DEPENDENCIAS-> SERVICIOS
  constructor(
    private readonly  _httpClient: HttpClient
  ){}

  ngOnInit(): void {
    const  urlUsuarios = this.url+'/usuario';
    const usuarios$ = this._httpClient.get(
      urlUsuarios
    );

    usuarios$.subscribe(
      (usuarios: any[])=>{//TRY
          console.log('Usuarios: ', usuarios)
        this.usuarios= usuarios;
        },
        (error)=>{//CATCH
        console.error({
          error: error,
          mensaje: 'Error consultando usuarios'
        })
        }
    )
  }

  editar(usuario){
    console.log('Editando usuario', usuario);
  }
  eliminar(usuario){
    console.log('Eliminando usuario', usuario);
  }

  usuariosFiltrados() {
    return this.usuarios
      .filter(
        (usuario)=> {
          return (
            usuario.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase()) &&
            usuario.apellido.toLowerCase().includes(this.apellidoFiltrado.toLowerCase()) &&
            usuario.correo.toLowerCase().includes(this.correoFiltrado.toLowerCase()) &&
            usuario.password.toLowerCase().includes(this.passwordFiltrado.toLowerCase())
          );
        }
      );
  }
}
