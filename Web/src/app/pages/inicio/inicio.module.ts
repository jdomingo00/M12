import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioContainer } from './inicio.container';


@NgModule({
  declarations: [InicioContainer],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
