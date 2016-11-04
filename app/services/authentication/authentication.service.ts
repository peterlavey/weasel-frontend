import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService{
  constructor(private http:Http){}

  login(token){
    return this.http.post('http://localhost:3002/weasel/authentication/' + token, {}).subscribe(
      data => {
          localStorage.setItem('user', JSON.stringify(data.json()));
      },
      error => {
          console.error('error');
      });
  }
  logout(){
    localStorage.removeItem('user');
  }
}
