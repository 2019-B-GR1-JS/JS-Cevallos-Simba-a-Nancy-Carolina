import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
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
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    MiModalPageModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
