import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SAmbientesPage } from './s-ambientes.page';

const routes: Routes = [
  {
    path: '',
    component: SAmbientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SAmbientesPageRoutingModule {}
