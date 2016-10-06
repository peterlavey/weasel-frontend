import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {ServiceDetailComponent} from '../components/detail/service-detail.component';
import {ServiceListComponent} from '../components/list/service-list.component';

const routes: Routes=[
  {
    path:'service-detail',
    component:ServiceDetailComponent
  },
  {
    path:'',
    component:ServiceListComponent
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
