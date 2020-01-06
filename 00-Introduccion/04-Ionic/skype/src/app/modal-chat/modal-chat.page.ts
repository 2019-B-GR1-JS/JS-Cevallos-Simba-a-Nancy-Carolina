import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal-chat',
  templateUrl: './modal-chat.page.html',
  styleUrls: ['./modal-chat.page.scss'],
})
export class ModalChatPage implements OnInit {

  constructor(private modalCtrl: ModalController,
              private router: Router) { }
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
  ngOnInit() {
  }

  cerrarChat() {
    this.modalCtrl.dismiss();
  }

  abrirChat(id) {
    this.modalCtrl.dismiss();
    this.router.navigate(['/chat-amigo', id]);
  }
}
