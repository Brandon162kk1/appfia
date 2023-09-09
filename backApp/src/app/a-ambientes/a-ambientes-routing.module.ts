import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AAmbientesPage } from './a-ambientes.page';

const routes: Routes = [
  {
    path: '',
    component: AAmbientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AAmbientesPageRoutingModule {}
