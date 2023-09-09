import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IAmbientesPageRoutingModule } from './i-ambientes-routing.module';

import { IAmbientesPage } from './i-ambientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IAmbientesPageRoutingModule
  ],
  declarations: [IAmbientesPage]
})
export class IAmbientesPageModule {}
