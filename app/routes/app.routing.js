"use strict";
var router_1 = require('@angular/router');
var service_detail_component_1 = require('../components/detail/service-detail.component');
var service_list_component_1 = require('../components/list/service-list.component');
var routes = [
    {
        path: 'service-detail',
        component: service_detail_component_1.ServiceDetailComponent
    },
    {
        path: '',
        component: service_list_component_1.ServiceListComponent
    }
];
exports.ROUTES = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map