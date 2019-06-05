import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'contato-modal', loadChildren: './contato-modal/contato-modal.module#ContatoModalPageModule' },
  { path: 'contato-detail/:id', loadChildren: './contato-detail/contato-detail.module#ContatoDetailPageModule' },
  { path: 'info-detail/:nome', loadChildren: './info-detail/info-detail.module#InfoDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
