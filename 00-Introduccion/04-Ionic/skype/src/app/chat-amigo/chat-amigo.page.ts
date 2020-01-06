import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat-amigo',
  templateUrl: './chat-amigo.page.html',
  styleUrls: ['./chat-amigo.page.scss'],
})
export class ChatAmigoPage implements OnInit {
  argumento = null;
  contactos = [
    {
      id: 1,
      nombre: 'Sara Selena',
      mensajes: [{
        clase: 0,
        tiempo: '10:23',
        mensaje: 'puedes enviarme la nota'
      }, {
        clase: 1,
        tiempo: '11:10',
        mensaje: 'gracias te debo una'
      }, {
        clase: 2,
        tiempo: '10:00',
        mensaje: 'Hola como estas'
      }
      ],
      imagen: 'https://i.pinimg.com/originals/1c/da/6d/1cda6db0c845f3d486f6d13fca9f3e3e.png',
      tiempo: '21:45.'
    },
    {
      id: 2,
      nombre: 'German simbaña',
      mensajes: [{
        clase: 0,
        tiempo: '10:23',
        mensaje: 'gracias'
      }
      ],
      imagen: 'http://assets.cdnelnuevodiario.com/ckeditor/2017/08/01/tom-halland.png',
      tiempo: 'En línea'
    },
    {
      id: 3,
      nombre: 'RDC-Mosflor',
      mensajes: [{
        clase: 0,
        tiempo: '10:23',
        mensaje: 'puedes enviarme la nota'
      }, {
        clase: 1,
        tiempo: '11:10',
        mensaje: 'gracias te debo una'
      }, {
        clase: 2,
        tiempo: '10:00',
        mensaje: 'Hola como estas'
      }
      ],
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMmV03b7xjb5WTclX7P1Aq2CbB2md4Yt5bP_gI6i86M7e2icE&s',
      tiempo: '12/12/2019.'
    },
    {
      id: 4,
      nombre: '12 razones',
      mensajes: [{
        clase: 0,
        tiempo: '10:23',
        mensaje: 'sin respuesta'
      }, {
        clase: 1,
        tiempo: '11:10',
        mensaje: 'gracias te debo una'
      }, {
        clase: 2,
        tiempo: '10:00',
        mensaje: 'Hola como estas'
      }
      ],
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7N_Zf5qAOAsYAjVYRYXsjJk57csMhqHktwr9Mi69MQ4ednwF&s',
      tiempo: '25/12/2019'
    },
    {
      id: 5,
      nombre: 'Adam Sandles',
      mensajes: [{
        clase: 0,
        tiempo: '10:23',
        mensaje: 'tienes los apuntes'
      }, {
        clase: 1,
        tiempo: '11:10',
        mensaje: 'gracias'
      }, {
        clase: 2,
        tiempo: '10:00',
        mensaje: 'quien es?'
      }
      ],
      imagen: 'http://elheraldoslp.com.mx/wp-content/uploads/2015/04/adam-sandler-net-worth.png',
      tiempo: '10/11/2019'
    },
    {
      id: 6,
      nombre: 'Luciano',
      mensajes: [{
        clase: 0,
        tiempo: '10:23',
        mensaje: 'adivina'
      }, {
        clase: 1,
        tiempo: '11:10',
        mensaje: 'mi pelicula favorita'
      }
      ],
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpvwYWTnDMGrfrQLqSfWIgtv7e39mmyHecvoj1ff_9y_4BYE4&s',
      tiempo: '3/10/2019'
    }
  ];
  respuesta = [
    {
      clase: 'otro-mensaje',
      tiempo: '10.23',
      mensaje: 'dime en que puedo ayudarte'
    }, {
      clase: 'otro-mensaje',
      tiempo: '10.23',
      mensaje: 'claro te envio enseguida'
    }, {
      clase: 'otro-mensaje',
      tiempo: '10.23',
      mensaje: 'espera'
    }, {
      clase: 'otro-mensaje',
      tiempo: '10.23',
      mensaje: 'ok'
    }, {
      clase: 'otro-mensaje',
      tiempo: '10.23',
      mensaje: 'gracias'
    }, {
      clase: 'otro-mensaje',
      tiempo: '10.23',
      mensaje: 'nos vemos'
    }, {
      clase: 'otro-mensaje',
      tiempo: '10.23',
      mensaje: 'hola como estas'
    }
  ];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.argumento = this.activatedRoute.snapshot.paramMap.get('amigo');
  }

}
