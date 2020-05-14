import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { ClasesContainer } from './clases.container';


@NgModule({
  declarations: [ClasesContainer],
  imports: [
    CommonModule,
    ClasesRoutingModule
  ]
})
export class ClasesModule { }
