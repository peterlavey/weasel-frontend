//import { Injectable }     from '@angular/core';
//import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { Rest } from './rest';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProcessService {
  private _headers = new Headers({'Content-Type': 'application/json'});

  constructor(private _http:  Http) {

  }

  getServices(): Observable<Rest[]>{
    return this._http.get('http://localhost:3002/weasel-api/list', {headers: this._headers}).map(res => res.json());
  }

  addService(rest: Rest): Observable<any>{
    console.info(rest);
    return this._http.post('http://localhost:3002/weasel-api/add', JSON.stringify(rest), {headers: this._headers}).map(res => console.info(res));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
