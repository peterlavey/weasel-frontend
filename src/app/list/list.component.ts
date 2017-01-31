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

  @Input() folder: Folder;
  @Output() folderChange = new EventEmitter<Folder>();

  constructor(private _processService: ProcessService) {
    this.getFolder('root');
  }

  ngOnInit() { }

  getFolder(name:string): void {
    this._processService.getFolder(name).subscribe(data => {
      this.folder = data;
      this.folderChange.emit(this.folder);
    });
  }

  emitParent(folder: Folder){
    this.folder = folder;
    this.folderChange.emit(this.folder);
  }
}
