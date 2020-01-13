import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";
import {ButtonModule, InputTextModule, TableModule} from "primeng";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,//Directivas: nfGor,ngIf
    AppRoutingModule,
    FormsModule,//Formularios
    HttpClientModule,//HTTP
    ButtonModule,
    TableModule,
    InputTextModule
  ],
  providers: [
    UsuarioRestService
  ],//servicios de la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule { }
