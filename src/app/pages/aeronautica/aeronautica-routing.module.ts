import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AeronauticaPage } from './aeronautica.page';

const routes: Routes = [
  {
    path: '',
    component: AeronauticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AeronauticaPageRoutingModule {}
