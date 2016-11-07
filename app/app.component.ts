import { Component } from '@angular/core';
import {AuthenticationService} from './services/authentication/authentication.service';

import { Router } from '@angular/router';

declare var auth2:any;

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor(
    private _authenticationService:AuthenticationService,
    private _router:Router
  ){}
  signOut() {
    this._authenticationService.logout();
    this._router.navigate(['/']);
  };
}
