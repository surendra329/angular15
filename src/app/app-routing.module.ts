import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TiffinsComponent } from './tiffins/tiffins.component';
import { registerLocaleData } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LunchComponent } from './lunch/lunch.component';
import { AuthServiceGuard } from './auth/auth-service.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { SnacksComponent } from './snacks/snacks.component';
import { DinnerComponent } from './dinner/dinner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { DataShareComponent } from './data-share/data-share.component';
import { DietComponent } from './diet/diet.component';
import { AdminComponent } from './admin/admin.component';
import { MapComponent } from './map/map.component';
import { BallgameComponent } from './ballgame/ballgame.component';

const routes: Routes = [
  {
    path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthServiceGuard]
    
  },
  {
    path:'tiffins',
    component:TiffinsComponent,
    canActivate:[AuthServiceGuard]

  },{
    path:'registration',
    component:RegistrationComponent
  },{
      path: 'lunch',
      component: LunchComponent,
      canActivate:[AuthServiceGuard]
    },{
      path:'login',
      component:LoginPageComponent
    },{
      path:'snacks',
      component:SnacksComponent,
      canActivate:[AuthServiceGuard]
    },{
      path:'dinner',
      component:DinnerComponent,
      canActivate:[AuthServiceGuard]
    },{
      path:'diet',
      component:DietComponent,
      canActivate:[AuthServiceGuard]
    },{
      path:'404',
      component: BallgameComponent
    },{
      path:'employee',
      component:EmployeeComponent,
      canActivate:[AuthServiceGuard]
    },{
      path:'share',
      component:DataShareComponent
    },{
      path:'admin',
      component:AdminComponent
    },{
      path:'map',
      component:MapComponent
    },{
      path:'game',
      component:BallgameComponent
    },
    {
      path:'**',
      redirectTo: '404'
    }
     ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
