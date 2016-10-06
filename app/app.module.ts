import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {ServiceDetailComponent} from './components/detail/service-detail.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [DashboardComponent, ServiceDetailComponent],
  bootstrap: [DashboardComponent]
})
export class AppModule{}
