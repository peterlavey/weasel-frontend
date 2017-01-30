import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessService } from '../process.service';
import { Folder } from '../folder';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() directories: string[];
  @Input() folder: Folder;
  @Output() folderChange= new EventEmitter<Folder>();
  constructor(private _processService: ProcessService) { }

  ngOnInit() { }

  navigate(directory: string){
    this.directories.splice(this.directories.indexOf(directory));
    this._processService.stopServices();
    this.getFolder(directory);
  }

  getFolder(name:string): void {
    this._processService.getFolder(name).subscribe(data => {
      this.folder = data;
      this.directories.push(this.folder.name);
      this.folderChange.emit(this.folder);
    });
  }
}
