import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatAmigoPage } from './chat-amigo.page';

const routes: Routes = [
  {
    path: '',
    component: ChatAmigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatAmigoPageRoutingModule {}
