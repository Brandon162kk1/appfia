import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'menu-carrera',
    loadChildren: () => import('./pages/menu-carrera/menu-carrera.module').then( m => m.MenuCarreraPageModule)
  },
  {
    path: 'sistemas',
    loadChildren: () => import('./pages/sistemas/sistemas.module').then( m => m.SistemasPageModule)
  },
  {
    path: 'civil',
    loadChildren: () => import('./pages/civil/civil.module').then( m => m.CivilPageModule)
  },
  {
    path: 'industrial',
    loadChildren: () => import('./pages/industrial/industrial.module').then( m => m.IndustrialPageModule)
  },
  {
    path: 'aeronautica',
    loadChildren: () => import('./pages/aeronautica/aeronautica.module').then( m => m.AeronauticaPageModule)
  },
  {
    path: 'arquitectura',
    loadChildren: () => import('./pages/arquitectura/arquitectura.module').then( m => m.ArquitecturaPageModule)
  },
  {
    path: 'oficinas',
    loadChildren: () => import('./pages/oficinas/oficinas.module').then( m => m.OficinasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
