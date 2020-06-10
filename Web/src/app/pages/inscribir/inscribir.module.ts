import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscribirRoutingModule } from './inscribir-routing.module';
import { InscribirContainer } from './inscribir.container';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [InscribirContainer],
  imports: [
    CommonModule,
    InscribirRoutingModule,
    ReactiveFormsModule
  ]
})
export class InscribirModule { }
