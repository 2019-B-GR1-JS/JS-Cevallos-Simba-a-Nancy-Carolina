import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FILAS} from "./constantes/numero-filas-por-tabla";
import {MatDialog} from "@angular/material";
import {ModalEditarUsuarioComponent} from "./modales/modal-editar-usuario/modal-editar-usuario.component";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";
import {AuthService} from "./services/auth/auth.service";

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
    private readonly  _httpClient: HttpClient,
    public readonly _matDialog: MatDialog,
    public readonly _usuarioRestService:UsuarioRestService,
    private readonly _authService:AuthService
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
    const matDialogModalEditarUsuario=this._matDialog
      .open(
        ModalEditarUsuarioComponent,
        {
          width:'500px',
          data:{
            //usuario: usuario se define aí,
            usuario // cuando los dos nombres son iguales se puede usar solo el nombre del objeto
          }
        }
      );
    const respuestaDialog$ = matDialogModalEditarUsuario
      .afterClosed();

    respuestaDialog$
      .subscribe(
        (datos)=>{//try
          console.log('Datos ', datos);
          if(datos){
            this.editarUsuarioHTTP(usuario, datos)
          }else{
            //undefined
          }
        },
        (error)=>{
          console.log('Error ',error);
        }
      )
  }

  editarUsuarioHTTP(id:number, datos) {
    const usuarioEditado$ = this._usuarioRestService
      .editar(id, datos);
    usuarioEditado$
      .subscribe(
        (usuarioEditado: any) => {
          console.log(usuarioEditado);
          const indice = this.usuarios
            .findIndex(
              (usuario) => {
                return usuario.id === id;
              }
            );
          this.usuarios[indice].nombre=datos.nombre;
          this.usuarios[indice].apellido=datos.apellido;
          this.usuarios[indice].correo=datos.correo;
          this.usuarios[indice].password=datos.password;
        },
        (error) => {
          console.log(error)
        }
      )
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
