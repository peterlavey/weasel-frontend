"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_1 = require('./routes/app.routing');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var company_detail_component_1 = require('./components/detail/company-detail.component');
var company_list_component_1 = require('./components/list/company-list.component');
var company_add_component_1 = require('./components/add/company-add.component');
var login_component_1 = require('./components/login/login.component');
var authentication_service_1 = require('./services/authentication/authentication.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.ROUTES,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            declarations: [
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                company_detail_component_1.CompanyDetailComponent,
                company_list_component_1.CompanyListComponent,
                company_add_component_1.CompanyAddComponent
            ],
            providers: [
                authentication_service_1.AuthenticationService
            ],
            bootstrap: [login_component_1.LoginComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map