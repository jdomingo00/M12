import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasesContainer } from './pages/clases/clases.container';
import { InicioContainer } from './pages/inicio/inicio.container';
import { HorariosContainer } from './pages/horarios/horarios.container';
import { TarifasContainer } from './pages/tarifas/tarifas.container';
import { ContactoContainer } from './pages/contacto/contacto.container';
import { InscribirContainer } from './pages/inscribir/inscribir.container';


const routes: Routes = [
  { path: '', component: InicioContainer },
  { path: 'clases', component: ClasesContainer },
  { path: 'contacto', component: ContactoContainer },
  { path: 'horarios', component: HorariosContainer },
  { path: 'inscribir', component: InscribirContainer },
  { path: 'tarifas', component: TarifasContainer },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
