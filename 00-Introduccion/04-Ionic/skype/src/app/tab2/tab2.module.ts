import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import {MiModalPageModule} from '../mi-modal/mi-modal.module';
import {MiModalPage} from '../mi-modal/mi-modal.page';

@NgModule({
  entryComponents: [
    MiModalPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    MiModalPageModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
