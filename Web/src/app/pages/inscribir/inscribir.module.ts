import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscribirRoutingModule } from './inscribir-routing.module';
import { InscribirContainer } from './inscribir.container';


@NgModule({
  declarations: [InscribirContainer],
  imports: [
    CommonModule,
    InscribirRoutingModule
  ]
})
export class InscribirModule { }
