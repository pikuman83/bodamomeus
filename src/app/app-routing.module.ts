import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvitadoComponent } from './components/invitado/invitado.component';
import { VenueComponent } from './components/venue/venue.component';

const routes: Routes = [
  {path: '', redirectTo: '/invitado/o-Ali', pathMatch: 'full'},
  {path: 'venue', component: VenueComponent },
  {path: 'invitado/:id', component: InvitadoComponent },
  // {path: 'dashboardRM', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
