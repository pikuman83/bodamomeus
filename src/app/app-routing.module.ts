import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitadoComponent } from './components/invitado/invitado.component';
import { VenueComponent } from './components/venue/venue.component';

const routes: Routes = [
  {path: '', redirectTo: '/invitado', pathMatch: 'full'},
  {path: 'invitado', component: InvitadoComponent },
  // {path: 'invitado/:id', component: InvitadoComponent },
  {path: 'venue', component: VenueComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
