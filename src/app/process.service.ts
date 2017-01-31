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

  constructor(private _http:  Http) { }

  getFolder(name:string): Observable<Folder>{
    return this._http.get(`http://localhost:3002/weasel-api/list/folders/${name}`, this._options).map((res: Response) => res.json());
  }

  createFolder(name: string, folder: any){
    let body = JSON.stringify(folder);
    return this._http.post(`http://localhost:3002/weasel-api/add/folder/${name}`, body, this._options);
  }

  deleteFolder(name:string, folder: Folder): Observable<Folder>{
    let body = JSON.stringify(folder);
    return this._http.post(`http://localhost:3002/weasel-api/delete/folder/${name}`, body, this._options).map((res: Response) => res.json());
  }

  getRests(): Observable<Rest[]>{
    return this._http.get('http://localhost:3002/weasel-api/list/rests', this._options).map((res: Response) => res.json());
  }

  addService(name: string, rest: Rest): Observable<any>{
    console.info(JSON.stringify(rest));
    let body = JSON.stringify(rest);
    return this._http.post(`http://localhost:3002/weasel-api/add/rest/${name}`, body, this._options);
  }

  removeRest(name: string, rest: Rest): Observable<any>{
    console.info(JSON.stringify(rest));
    let body = JSON.stringify(rest);
    return this._http.post(`http://localhost:3002/weasel-api/remove/rest/${name}`, body, this._options).map((res: Response) => res.json());
  }

  getOptions(): Observable<any>{
    return this._http.get('http://localhost:3002/weasel-api/list/options', this._options).map((res: Response) => res.json());
  }

  saveOptions(options:number): Observable<any>{
    return this._http.post('http://localhost:3002/weasel-api/options', options, this._options).map((res: Response) => console.log(res));
  }

  startServices(name:string): Observable<any>{
    return this._http.get(`http://localhost:3002/weasel-api/start/${name}`, this._options).map((res: Response) => console.log(res));
  }

  stopServices(): Observable<any>{
    return this._http.get('http://localhost:3002/weasel-api/kill', this._options).map((res: Response) => console.log(res));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
