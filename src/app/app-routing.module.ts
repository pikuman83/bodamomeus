import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvitadoComponent } from './components/invitado/invitado.component';

const routes: Routes = [
  {path: 'invitado/:id', component: InvitadoComponent},
  {path: 'somNosaltres', component: DashboardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
