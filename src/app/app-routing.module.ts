import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {    path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home',loadChildren: './home/home.module#HomePageModule'},
  { path: 'list',loadChildren: './list/list.module#ListPageModule'},
  { path: 'appointment', loadChildren: './appointment/appointment.module#AppointmentPageModule' },
  { path: 'appointments', loadChildren: './appointments/appointments.module#AppointmentsPageModule' },
  { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
  { path: 'customers', loadChildren: './customers/customers.module#CustomersPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'log-out', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
