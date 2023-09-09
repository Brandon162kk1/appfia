import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArAmbientesPage } from './ar-ambientes.page';

const routes: Routes = [
  {
    path: '',
    component: ArAmbientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArAmbientesPageRoutingModule {}
