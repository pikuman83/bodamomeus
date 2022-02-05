import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvitadoComponent } from './components/invitado/invitado.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VenueComponent } from './components/venue/venue.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';

@NgModule({
  declarations: [
    AppComponent,
    InvitadoComponent,
    DashboardComponent,
    VenueComponent,
    AsistenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
