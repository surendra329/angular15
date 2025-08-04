import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TiffinsComponent } from './tiffins/tiffins.component';
import { registerLocaleData } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'tiffins',
    component:TiffinsComponent
  },{
    path:'registration',
    component:RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
