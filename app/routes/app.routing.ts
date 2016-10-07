import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {ServiceDetailComponent} from '../components/detail/service-detail.component';
import {ServiceListComponent} from '../components/list/service-list.component';
import {ServiceAddComponent} from '../components/add/service-add.component';

const routes: Routes=[
  {
    path:'',
    component:ServiceListComponent
  },
  {
    path:'service-detail',
    component:ServiceDetailComponent
  },
  {
    path:'service-add',
    component:ServiceAddComponent
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
