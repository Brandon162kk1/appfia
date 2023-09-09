import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AeronauticaPageRoutingModule } from './aeronautica-routing.module';

import { AeronauticaPage } from './aeronautica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AeronauticaPageRoutingModule
  ],
  declarations: [AeronauticaPage]
})
export class AeronauticaPageModule {}
