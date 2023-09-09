import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AAmbientesPageRoutingModule } from './a-ambientes-routing.module';

import { AAmbientesPage } from './a-ambientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AAmbientesPageRoutingModule
  ],
  declarations: [AAmbientesPage]
})
export class AAmbientesPageModule {}
