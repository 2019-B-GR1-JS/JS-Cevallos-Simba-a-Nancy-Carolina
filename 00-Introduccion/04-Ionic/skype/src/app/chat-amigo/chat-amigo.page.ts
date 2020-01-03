import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat-amigo',
  templateUrl: './chat-amigo.page.html',
  styleUrls: ['./chat-amigo.page.scss'],
})
export class ChatAmigoPage implements OnInit {
  argumento = null;

  mensajes = [
    {}
  ]
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.argumento = this.activatedRoute.snapshot.paramMap.get('amigo');
  }

}
