import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {ROUTES} from './routes/app.routing';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ServiceDetailComponent} from './components/detail/service-detail.component';
import {ServiceListComponent} from './components/list/service-list.component';

@NgModule({
  imports: [BrowserModule, ROUTES, FormsModule],
  declarations: [DashboardComponent, ServiceDetailComponent, ServiceListComponent],
  bootstrap: [DashboardComponent]
})
export class AppModule{}
