import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import {MiModalPage} from '../mi-modal/mi-modal.page';
import {MiModalPageModule} from '../mi-modal/mi-modal.module';
import {ModalChatPage} from '../modal-chat/modal-chat.page';
import {ModalChatPageModule} from '../modal-chat/modal-chat.module';
import {ModalPerfilPage} from '../modal-perfil/modal-perfil.page';
import {ModalPerfilPageModule} from '../modal-perfil/modal-perfil.module';

@NgModule({
  entryComponents: [
    MiModalPage,
    ModalChatPage,
    ModalPerfilPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    MiModalPageModule,
    ModalChatPageModule,
    ModalPerfilPageModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
