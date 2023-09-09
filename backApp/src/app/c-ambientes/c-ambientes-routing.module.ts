import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CAmbientesPage } from './c-ambientes.page';

const routes: Routes = [
  {
    path: '',
    component: CAmbientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CAmbientesPageRoutingModule {}
