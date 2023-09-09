import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfiAmbientesPageRoutingModule } from './ofi-ambientes-routing.module';

import { OfiAmbientesPage } from './ofi-ambientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfiAmbientesPageRoutingModule
  ],
  declarations: [OfiAmbientesPage]
})
export class OfiAmbientesPageModule {}
