import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TiffinsComponent } from './tiffins/tiffins.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LunchComponent } from './lunch/lunch.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SnacksComponent } from './snacks/snacks.component';
import { DinnerComponent } from './dinner/dinner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataShareComponent } from './data-share/data-share.component';
import { DietComponent } from './diet/diet.component';
import { AdminComponent } from './admin/admin.component';

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
    EmployeeComponent,
    DataShareComponent,
    DietComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//for ngModel [(ngModel)]
    HttpClientModule, //for http API calls
    BrowserAnimationsModule, //for Http services 
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
