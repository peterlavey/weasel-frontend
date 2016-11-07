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
var router_1 = require('@angular/router');
var authentication_service_1 = require('../../services/authentication/authentication.service');
var LoginComponent = (function () {
    function LoginComponent(_router, _authenticationService) {
        this._router = _router;
        this._authenticationService = _authenticationService;
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        gapi.signin2.render("google-login-button", {
            "scope": "profile email",
            "theme": "dark",
            "onSuccess": function (googleUser) {
                var id_token = googleUser.getAuthResponse().id_token;
                _this._authenticationService.login(id_token);
                _this._router.navigate(['/']);
            },
            "onfailure": function (err) { return console.log("error:" + err); }
        });
    };
    ;
    LoginComponent.prototype.signOut = function () {
        /*  let auth2 = gapi.auth2.getAuthInstance();
          auth2.signOut().then(()=>{
            console.log('User signed out.');
          });*/
        this._authenticationService.logout();
    };
    ;
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './app/components/login/login.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map