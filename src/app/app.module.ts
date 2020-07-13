import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// import http client module 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CalcComponent } from './pages/calc/calc.component';
import { BindComponent } from './pages/bind/bind.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { RestclientComponent } from './pages/restclient/restclient.component';

// import RestapiService
import {RestapiService} from './restapi.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CalcComponent,
    BindComponent,
    TodoappComponent,
    RestclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],

  // masukan rest api service di provider 
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
