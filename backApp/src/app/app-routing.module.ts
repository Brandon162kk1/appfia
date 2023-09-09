import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'directorio',
    loadChildren: () => import('./directorio/directorio.module').then( m => m.DirectorioPageModule)
  },
  {
    path: 'recorrido',
    loadChildren: () => import('./recorrido/recorrido.module').then( m => m.RecorridoPageModule)
  },
  {
    path: 'graduados',
    loadChildren: () => import('./graduados/graduados.module').then( m => m.GraduadosPageModule)
  },
  {
    path: 'aulas',
    loadChildren: () => import('./aulas/aulas.module').then( m => m.AulasPageModule)
  },
  {
    path: 's-ambientes',
    loadChildren: () => import('./s-ambientes/s-ambientes.module').then( m => m.SAmbientesPageModule)
  },
  {
    path: 'i-ambientes',
    loadChildren: () => import('./i-ambientes/i-ambientes.module').then( m => m.IAmbientesPageModule)
  },
  {
    path: 'c-ambientes',
    loadChildren: () => import('./c-ambientes/c-ambientes.module').then( m => m.CAmbientesPageModule)
  },
  {
    path: 'ar-ambientes',
    loadChildren: () => import('./ar-ambientes/ar-ambientes.module').then( m => m.ArAmbientesPageModule)
  },
  {
    path: 'a-ambientes',
    loadChildren: () => import('./a-ambientes/a-ambientes.module').then( m => m.AAmbientesPageModule)
  },
  {
    path: 'ofi-ambientes',
    loadChildren: () => import('./ofi-ambientes/ofi-ambientes.module').then( m => m.OfiAmbientesPageModule)
  },
  {
    path: 'sistemas/:id',
    loadChildren: () => import('./sistemas/sistemas.module').then( m => m.SistemasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
