import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.page.html',
  styleUrls: ['./modal-perfil.page.scss'],
})
export class ModalPerfilPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  cerrarPerfil() {
    this.modalCtrl.dismiss();
  }

}
