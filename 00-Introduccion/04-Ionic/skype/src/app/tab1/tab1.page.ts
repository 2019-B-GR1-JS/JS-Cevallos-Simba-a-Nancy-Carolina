import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { MiModalPage} from '../mi-modal/mi-modal.page';
import {ModalChatPage} from '../modal-chat/modal-chat.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalCtrl: ModalController) {}

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
}
