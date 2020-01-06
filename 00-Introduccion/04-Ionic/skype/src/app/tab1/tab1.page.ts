import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { MiModalPage} from '../mi-modal/mi-modal.page';
import {ModalChatPage} from '../modal-chat/modal-chat.page';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import {ModalPerfilPage} from '../modal-perfil/modal-perfil.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalCtrl: ModalController,
              private router: Router,
              private actionSheetController: ActionSheetController) {}
    contactos = [
        {
            id: 0,
            nombre: 'Sara Selena',
            mensaje: 'hola como estas',
            imagen: 'https://i.pinimg.com/originals/1c/da/6d/1cda6db0c845f3d486f6d13fca9f3e3e.png',
            ultima_conexion: 'vie.'
        },
        {
            id: 1,
            nombre: 'German simbaña',
            mensaje: 'gracias',
            imagen: 'http://assets.cdnelnuevodiario.com/ckeditor/2017/08/01/tom-halland.png',
            ultima_conexion: 'jue.'
        },
        {
            id: 2,
            nombre: 'RDC-Mosflor',
            mensaje: 'sin respuesta',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMmV03b7xjb5WTclX7P1Aq2CbB2md4Yt5bP_gI6i86M7e2icE&s',
            ultima_conexion: '12/12/2019.'
        },
        {
            id: 3,
            nombre: '12 razones',
            mensaje: 'quien es?',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7N_Zf5qAOAsYAjVYRYXsjJk57csMhqHktwr9Mi69MQ4ednwF&s',
            ultima_conexion: '25/12/2019'
        },
        {
            id: 4,
            nombre: 'Adam Sandles',
            mensaje: 'mi pelicula favorita',
            imagen: 'http://elheraldoslp.com.mx/wp-content/uploads/2015/04/adam-sandler-net-worth.png',
            ultima_conexion: '10/11/2019'
        },
        {
            id: 5,
            nombre: 'Luciano',
            mensaje: 'actor',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpvwYWTnDMGrfrQLqSfWIgtv7e39mmyHecvoj1ff_9y_4BYE4&s',
            ultima_conexion: '3/10/2019'
        }
    ];


    async abrirModal() {
      const modal = await this.modalCtrl.create({
        component: MiModalPage,
        componentProps: {
          nombre: 'Caro',
          apellido: 'Cevallos'
        }
      });
      await modal.present();
    }

    async abrirPerfil() {
        const modal = await this.modalCtrl.create({
            component: ModalPerfilPage,
            componentProps: {
                nombre: 'Caro',
                apellido: 'Cevallos'
            }
        });
        await modal.present();
    }

    async nuevoChat() {
      const modalChat = await this.modalCtrl.create({
        component: ModalChatPage,
        componentProps: {}
      });
      await modalChat.present();
    }

    abrirChat(id) {
        this.router.navigate(['/chat-amigo', id]);
    }

    async abirOpciones() {
        const  actionSheet = await  this.actionSheetController.create({
           header: 'Administrar chats:',
           buttons: [{
               text: 'Ordenar por Recientes'
           }, {
               text: 'Ordenar por No leídos'
           }, {
               text: 'Ordenar por En línea'
           }, {
               text: 'Ocultar favoritos'
           }, {
               text: 'Habilitar el diseño compacto'
           }, {
               text: 'Cancelar',
               role: 'cancel'
           }]
        });
        await actionSheet.present();
     }


}
