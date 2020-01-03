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

@NgModule({
  entryComponents: [
    MiModalPage,
    ModalChatPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    MiModalPageModule,
    ModalChatPageModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
