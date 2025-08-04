import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TiffinsComponent } from './tiffins/tiffins.component';
import { RegistrationComponent } from './registration/registration.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LunchComponent } from './lunch/lunch.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SnacksComponent } from './snacks/snacks.component';
import { DinnerComponent } from './dinner/dinner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TiffinsComponent,
    RegistrationComponent,
    LunchComponent,
    LoginPageComponent,
    SnacksComponent,
    DinnerComponent,
    PageNotFoundComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//for ngModel [(ngModel)]
    HttpClientModule //for Http services 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
