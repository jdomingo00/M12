import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarifasRoutingModule } from './tarifas-routing.module';
import { TarifasContainer } from './tarifas.container';


@NgModule({
  declarations: [TarifasContainer],
  imports: [
    CommonModule,
    TarifasRoutingModule
  ]
})
export class TarifasModule { }
