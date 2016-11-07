import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {ROUTES} from './routes/app.routing';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CompanyDetailComponent} from './components/detail/company-detail.component';
import {CompanyListComponent} from './components/list/company-list.component';
import {CompanyAddComponent} from './components/add/company-add.component';
import {LoginComponent} from './components/login/login.component';

import {AuthenticationService} from './services/authentication/authentication.service';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    ROUTES,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    CompanyDetailComponent,
    CompanyListComponent,
    CompanyAddComponent
  ],
  providers:[
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}
