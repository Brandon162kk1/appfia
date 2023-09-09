import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCarreraPage } from './menu-carrera.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCarreraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCarreraPageRoutingModule {}
