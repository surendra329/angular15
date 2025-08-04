import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TiffinsComponent } from './tiffins/tiffins.component';
import { RegistrationComponent } from './registration/registration.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TiffinsComponent,
    RegistrationComponent
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
