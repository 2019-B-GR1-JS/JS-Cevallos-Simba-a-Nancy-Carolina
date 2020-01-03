import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modal-chat',
    loadChildren: () => import('./modal-chat/modal-chat.module').then( m => m.ModalChatPageModule)
  },
  {
    path: 'chat-amigo',
    loadChildren: () => import('./chat-amigo/chat-amigo.module').then( m => m.ChatAmigoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
