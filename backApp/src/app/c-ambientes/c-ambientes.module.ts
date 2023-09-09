import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CAmbientesPageRoutingModule } from './c-ambientes-routing.module';

import { CAmbientesPage } from './c-ambientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CAmbientesPageRoutingModule
  ],
  declarations: [CAmbientesPage]
})
export class CAmbientesPageModule {}
