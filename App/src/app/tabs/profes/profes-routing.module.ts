import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesPage } from './profes.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesPageRoutingModule {}
