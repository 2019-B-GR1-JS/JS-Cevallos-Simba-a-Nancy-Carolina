import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { MiModalPage} from '../mi-modal/mi-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
}
