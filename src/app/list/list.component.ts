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
  folder: Folder;
  rests: Rest[];
  breadcrumb: string[];
  constructor(private _processService: ProcessService) {
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

  navigate(directory:string){
    this.breadcrumb.splice(this.breadcrumb.indexOf(directory));

    this.getFolder(directory);
  }

  getRests(): void {
    this._processService.getServices().subscribe(data => {
      this.rests = data;
    });
  }

  startRest(): void {
    this._processService.startServices(this.folder.name).subscribe(data => console.info(data));
  }

  stopRest(): void {
    this._processService.stopServices().subscribe(data => console.info(data));
  }
}
