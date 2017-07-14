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
  private host: string = 'http://localhost:3002';
  //private host: string = 'https://weasel.herokuapp.com';

  constructor(private _http:  Http) { }

  import(name: string, addRest: string, folder: any){
    const body = JSON.stringify(folder);
    return this._http.post(`${this.host}/weasel-api/import/folder/${name}/${addRest}`, body, this._options).map((res: Response) => res.json());
  }

  getAddGroup(directory: string, folder: any){
    const body = JSON.stringify(folder);
    return this._http.post(`${this.host}/weasel-api/add/group/${directory}`, body, this._options).map((res: Response) => res.json());
  }

  getFolders(): Observable<Folder[]>{
    return this._http.get(`${this.host}/weasel-api/list/folders`, this._options).map((res: Response) => res.json());
  }

  getFolderByName(name:string): Observable<Folder>{
    return this._http.get(`${this.host}/weasel-api/list/folders/${name}`, this._options).map((res: Response) => res.json());
  }

  createFolder(name: string, folder: any){
    const body = JSON.stringify(folder);
    return this._http.post(`${this.host}/weasel-api/add/folder/${name}`, body, this._options).map((res: Response) => res.json());
  }

  removeGroup(nameDirectory:string, nameGroup: string): Observable<Folder>{
    return this._http.get(`${this.host}/weasel-api/remove/group/${nameDirectory}/${nameGroup}`, this._options).map((res: Response) => res.json());
  }

  deleteFolder(name:string, folder: Folder): Observable<Folder>{
    const body = JSON.stringify(folder);
    return this._http.post(`${this.host}/weasel-api/delete/folder/${name}`, body, this._options).map((res: Response) => res.json());
  }

  editFolder(name: string, folder: any, oldName: string){
    const body = JSON.stringify(folder);
    return this._http.post(`${this.host}/weasel-api/edit/folder/${name}/${oldName}`, body, this._options).map((res: Response) => res.json());
  }

  getRests(): Observable<Rest[]>{
    return this._http.get(`${this.host}/weasel-api/list/rests`, this._options).map((res: Response) => res.json());
  }

  addRest(name: string, rest: Rest): Observable<any>{
    const body = JSON.stringify(rest);
    return this._http.post(`${this.host}/weasel-api/add/rest/${name}`, body, this._options).map((res: Response) => res.json());
  }

  deleteRest(name: string, rest: Rest): Observable<any>{
    const body = JSON.stringify(rest);
    return this._http.post(`${this.host}/weasel-api/delete/rest/${name}`, body, this._options).map((res: Response) => res.json());
  }

  editRest(name: string, rest: Rest): Observable<any>{
    const body = JSON.stringify(rest);
    return this._http.post(`${this.host}/weasel-api/edit/rest/${name}`, body, this._options).map((res: Response) => res.json());
  }

  removeRest(name: string, rest: Rest): Observable<any>{
    const body = JSON.stringify(rest);
    return this._http.post(`${this.host}/weasel-api/remove/rest/${name}`, body, this._options).map((res: Response) => res.json());
  }

  addRestToFolder(name: string, rest: Rest): Observable<any>{
    const body = JSON.stringify(rest);
    return this._http.post(`${this.host}/weasel-api/add/rest-folder/${name}`, body, this._options).map((res: Response) => res.json());
  }

  getOptions(): Observable<any>{
    return this._http.get(`${this.host}/weasel-api/list/options`, this._options).map((res: Response) => res.json());
  }

  saveOptions(options:number): Observable<any>{
    return this._http.post(`${this.host}/weasel-api/options`, options, this._options).map((res: Response) => console.log(res));
  }

  startServices(name:string, content:any): Observable<any>{
    const body = JSON.stringify(content);
    return this._http.post(`${this.host}/weasel-api/start/${name}`, body, this._options).map((res: Response) => console.log(res));
  }

  stopServices(): Observable<any>{
    return this._http.get(`${this.host}/weasel-api/kill`, this._options).map((res: Response) => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
