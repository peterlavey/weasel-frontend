"use strict";
var router_1 = require('@angular/router');
var service_detail_component_1 = require('../components/detail/service-detail.component');
var service_list_component_1 = require('../components/list/service-list.component');
var service_add_component_1 = require('../components/add/service-add.component');
var routes = [
    {
        path: '',
        component: service_list_component_1.ServiceListComponent
    },
    {
        path: 'service-detail',
        component: service_detail_component_1.ServiceDetailComponent
    },
    {
        path: 'service-add',
        component: service_add_component_1.ServiceAddComponent
    }
];
exports.ROUTES = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map