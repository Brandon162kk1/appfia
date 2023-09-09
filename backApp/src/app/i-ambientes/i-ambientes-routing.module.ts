import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IAmbientesPage } from './i-ambientes.page';

const routes: Routes = [
  {
    path: '',
    component: IAmbientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IAmbientesPageRoutingModule {}
