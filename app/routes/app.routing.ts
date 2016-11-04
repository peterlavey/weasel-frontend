import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {CompanyDetailComponent} from '../components/detail/company-detail.component';
import {CompanyListComponent} from '../components/list/company-list.component';
import {CompanyAddComponent} from '../components/add/company-add.component';
import {LoginComponent} from '../components/login/login.component';

const routes: Routes=[
  {
    path:'company-list',
    component:CompanyListComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'company-detail',
    component:CompanyDetailComponent
  },
  {
    path:'company-add',
    component:CompanyAddComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
