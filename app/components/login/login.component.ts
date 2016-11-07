import {Component} from '@angular/core';
import { Router } from '@angular/router';

import {AuthenticationService} from '../../services/authentication/authentication.service';

declare var gapi:any;

@Component({
  selector:'login',
  templateUrl:'./app/components/login/login.html'
})

export class LoginComponent {
  constructor(
    private _router:Router,
    private _authenticationService:AuthenticationService
  ){}
  ngAfterViewInit() {
    gapi.signin2.render(
      "google-login-button",
      {
        "scope": "profile email",
        "theme": "dark",
        'width': 240,
        'height': 30,
        "onSuccess": (googleUser)=>{
          let id_token = googleUser.getAuthResponse().id_token;
          this._authenticationService.login(id_token);
          this._router.navigate(['/']);
        },
        "onfailure": (err)=>console.log("error:"+err)
      });
  };
}
