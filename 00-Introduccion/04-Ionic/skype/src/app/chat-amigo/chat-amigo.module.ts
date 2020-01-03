import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatAmigoPageRoutingModule } from './chat-amigo-routing.module';

import { ChatAmigoPage } from './chat-amigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatAmigoPageRoutingModule
  ],
  declarations: [ChatAmigoPage]
})
export class ChatAmigoPageModule {}
