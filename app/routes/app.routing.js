"use strict";
var router_1 = require('@angular/router');
var company_detail_component_1 = require('../components/detail/company-detail.component');
var company_list_component_1 = require('../components/list/company-list.component');
var company_add_component_1 = require('../components/add/company-add.component');
var login_component_1 = require('../components/login/login.component');
var routes = [
    {
        path: 'company-list',
        component: company_list_component_1.CompanyListComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'company-detail',
        component: company_detail_component_1.CompanyDetailComponent
    },
    {
        path: 'company-add',
        component: company_add_component_1.CompanyAddComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
exports.ROUTES = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map