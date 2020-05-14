import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutContainer } from './about.container';


@NgModule({
  declarations: [AboutContainer],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
