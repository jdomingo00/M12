import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoContainer } from './contacto.container';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactoContainer],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactoModule { }
