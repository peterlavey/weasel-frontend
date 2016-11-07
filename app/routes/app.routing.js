"use strict";
var router_1 = require('@angular/router');
var auth_guard_1 = require('../guards/auth.guard');
var home_component_1 = require('../components/home/home.component');
var company_detail_component_1 = require('../components/detail/company-detail.component');
var company_list_component_1 = require('../components/list/company-list.component');
var company_add_component_1 = require('../components/add/company-add.component');
var login_component_1 = require('../components/login/login.component');
var routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: '',
        component: home_component_1.HomeComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'company-list',
        component: company_list_component_1.CompanyListComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'company-detail',
        component: company_detail_component_1.CompanyDetailComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'company-add',
        component: company_add_component_1.CompanyAddComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
exports.ROUTES = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map