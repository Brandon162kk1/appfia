import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraduadosPageRoutingModule } from './graduados-routing.module';

import { GraduadosPage } from './graduados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraduadosPageRoutingModule
  ],
  declarations: [GraduadosPage]
})
export class GraduadosPageModule {}
