import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitadoComponent } from './components/invitado/invitado.component';
import { VenueComponent } from './components/venue/venue.component';

const routes: Routes = [
  {path: '', redirectTo: '/venue', pathMatch: 'full'},
  {path: 'invitado/:invitado', component: InvitadoComponent },
  {path: 'venue', component: VenueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
