import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SAmbientesPageRoutingModule } from './s-ambientes-routing.module';

import { SAmbientesPage } from './s-ambientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SAmbientesPageRoutingModule
  ],
  declarations: [SAmbientesPage]
})
export class SAmbientesPageModule {}
