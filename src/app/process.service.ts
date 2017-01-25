import { Rest } from './rest';
import { Folder } from './folder';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProcessService {
  private _headers = new Headers({'Content-Type': 'application/json'});
  private _options = new RequestOptions({ headers: this._headers });

  constructor(private _http:  Http) {

  }

  getFolder(name:string): Observable<Folder>{
    return this._http.get('http://localhost:3002/weasel-api/list/folders/' + name, this._options).map((res: Response) => res.json());
  }

  createFolder(name: string, folder: Folder){
    let body = JSON.stringify(folder);
    return this._http.post('http://localhost:3002/weasel-api/add/folder/' + name, body, this._options);
  }

  getServices(): Observable<Rest[]>{
    return this._http.get('http://localhost:3002/weasel-api/list/rests', this._options).map((res: Response) => res.json());
  }

  addService(rest: Rest): Observable<any>{
    console.info(JSON.stringify(rest));
    let body = JSON.stringify(rest);
    return this._http.post('http://localhost:3002/weasel-api/add', body, this._options);
  }

  startServices(name:string): Observable<any>{
    return this._http.get('http://localhost:3002/weasel-api/start/' + name, this._options).map((res: Response) => res.json());
  }

  stopServices(): Observable<any>{
    return this._http.get('http://localhost:3002/weasel-api/kill', this._options).map((res: Response) => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
