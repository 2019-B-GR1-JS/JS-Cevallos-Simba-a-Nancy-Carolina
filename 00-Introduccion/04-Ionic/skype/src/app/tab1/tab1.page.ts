import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { MiModalPage} from '../mi-modal/mi-modal.page';
import {ModalChatPage} from '../modal-chat/modal-chat.page';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalCtrl: ModalController, private router: Router) {}
    contactos = [
        {
            nombre: 'Sara Selena',
            mensaje: 'hola como estas',
            imagen: 'https://i.pinimg.com/originals/1c/da/6d/1cda6db0c845f3d486f6d13fca9f3e3e.png'
        },
        {
            nombre: 'German simbaña',
            mensaje: 'gracias',
            imagen: 'http://assets.cdnelnuevodiario.com/ckeditor/2017/08/01/tom-halland.png'
        },
        {
            nombre: 'RDC-Mosflor',
            mensaje: 'sin respuesta',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMmV03b7xjb5WTclX7P1Aq2CbB2md4Yt5bP_gI6i86M7e2icE&s'
        },
        {
            nombre: '12 razones',
            mensaje: 'quien es?',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7N_Zf5qAOAsYAjVYRYXsjJk57csMhqHktwr9Mi69MQ4ednwF&s'
        },
        {
            nombre: 'Adam Sandles',
            mensaje: 'mi pelicula favorita',
            imagen: 'http://elheraldoslp.com.mx/wp-content/uploads/2015/04/adam-sandler-net-worth.png'
        },
        {
            nombre: 'Luciano',
            mensaje: 'actor',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpvwYWTnDMGrfrQLqSfWIgtv7e39mmyHecvoj1ff_9y_4BYE4&s'
        }
    ]
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

}
