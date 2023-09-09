import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArAmbientesPageRoutingModule } from './ar-ambientes-routing.module';

import { ArAmbientesPage } from './ar-ambientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArAmbientesPageRoutingModule
  ],
  declarations: [ArAmbientesPage]
})
export class ArAmbientesPageModule {}
