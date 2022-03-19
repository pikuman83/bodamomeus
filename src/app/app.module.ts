import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvitadoComponent } from './components/invitado/invitado.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VenueComponent } from './components/invitado/venue/venue.component';
import { AsistenciaComponent } from './components/invitado/asistencia/asistencia.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
