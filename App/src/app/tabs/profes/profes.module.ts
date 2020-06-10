import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesPageRoutingModule } from './profes-routing.module';

import { ProfesPage } from './profes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfesPage]
})
export class ProfesPageModule {}
