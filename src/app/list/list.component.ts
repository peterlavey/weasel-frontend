import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessService } from '../process.service';
import { Rest } from '../rest';
import { Folder } from '../folder';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  rests: Rest[];

  @Input() folder: any;
  @Input() isRunning: boolean;
  @Output() folderChange = new EventEmitter<Folder>();

  constructor(private _processService: ProcessService) {
    this.getFolderByName('root');
  }

  ngOnInit() { }

  getFolderByName(name:string): void {
    this._processService.getFolderByName(name).subscribe(data => {
      this.folder = data;
      this.folderChange.emit(this.folder);
    });
  }

  emitParent(folder: Folder){
    this.folder = folder;
    this.folderChange.emit(this.folder);
  }

  haveAnyContent(): boolean{
    let _hasContent = false;

    if(this.folder.folders.length){
      _hasContent = true;
    }

    if(this.folder.content.length){
      _hasContent = true;
    }

    if(this.folder.hasOwnProperty('groups')){
      if(this.folder.groups.length){
        _hasContent = true;
      }
    }

    return _hasContent;
  }

  validateProperty(obj:any, property:string): boolean{
    return obj.hasOwnProperty(property);
  }
}
