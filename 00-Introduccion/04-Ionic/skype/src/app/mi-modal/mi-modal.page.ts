import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-mi-modal',
  templateUrl: './mi-modal.page.html',
  styleUrls: ['./mi-modal.page.scss'],
})
export class MiModalPage implements OnInit {
  imagen = 'assets/imagenes/notificaciones.PNG';
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}
