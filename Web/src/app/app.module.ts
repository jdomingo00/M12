import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { InicioContainer } from './pages/inicio/inicio.container';
import { ClasesContainer } from './pages/clases/clases.container';
import { ContactoContainer } from './pages/contacto/contacto.container';
import { HorariosContainer } from './pages/horarios/horarios.container';
import { TarifasContainer } from './pages/tarifas/tarifas.container';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InscribirContainer } from './pages/inscribir/inscribir.container';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InicioContainer,
    ClasesContainer,
    ContactoContainer,
    HorariosContainer,
    TarifasContainer,
    InscribirContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
