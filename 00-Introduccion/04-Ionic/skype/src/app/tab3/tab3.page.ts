import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { MiModalPage} from '../mi-modal/mi-modal.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
