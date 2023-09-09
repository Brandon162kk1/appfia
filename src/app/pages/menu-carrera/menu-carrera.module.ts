import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCarreraPageRoutingModule } from './menu-carrera-routing.module';

import { MenuCarreraPage } from './menu-carrera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCarreraPageRoutingModule
  ],
  declarations: [MenuCarreraPage]
})
export class MenuCarreraPageModule {}
