import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraduadosPage } from './graduados.page';

const routes: Routes = [
  {
    path: '',
    component: GraduadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraduadosPageRoutingModule {}
