import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../process.service';
import { Rest } from '../rest';
import { Folder } from '../folder';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  newFolder: any;
  folder: Folder;

  newRest: any;
  rests: Rest[];
  breadcrumb: string[];
  constructor(private _processService: ProcessService) {
    this.newFolder={
      id:0,
      name:'',
      content:[],
      folders:[]
    };

    this.newRest={
      name:'',
      path:'',
      response:''
    };

    this.breadcrumb=[];
    this.getFolder('root');
  }

  ngOnInit() {

  }

  getFolder(name:string): void {
    this._processService.getFolder(name).subscribe(data => {
      this.folder = data;
      this.breadcrumb.push(data.name);
    });
  }

  createFolder(): void{
    this._processService.createFolder(this.folder.name, this.newFolder).subscribe(data =>{
      this.folder.folders.push(this.newFolder.name);
    });
  }

  navigate(directory:string){
    this.breadcrumb.splice(this.breadcrumb.indexOf(directory));

    this.getFolder(directory);
  }

  getRests(): void {
    this._processService.getServices().subscribe(data => {
      this.rests = data;
    });
  }

  createRest(){
    this._processService.addService(this.folder.name, this.newRest).subscribe(res  => {
      this.folder.content.push(this.newRest);
    });
  }

  startRest(): void {
    this._processService.startServices(this.folder.name).subscribe(data => console.info(data));
  }

  stopRest(): void {
    this._processService.stopServices().subscribe(data => console.info(data));
  }
}
