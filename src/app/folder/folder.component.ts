import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessService } from '../process.service';
import { Folder } from '../folder';

declare var $: any;

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  @Input() folder: Folder;
  @Input() folderParent: Folder;
  @Output() folderChange = new EventEmitter<Folder>();

  private buildRequestFolder: any;

  constructor(private _processService: ProcessService) { }

  ngOnInit() {
    this.buildRequestFolder = {
      name: this.folder
    }
  }

  openConfirm(event){
    $(`#confirmDeleteFolder-${this.folder}`).modal('show');
    event.stopPropagation();
  }

  closeConfirm(event){
    $(`#confirmDeleteFolder-${this.folder}`).modal('hide');
    event.stopPropagation();
  }

  delete(event): void{
    this.closeConfirm(event);
    this._processService.deleteFolder(this.folderParent.name, this.buildRequestFolder).subscribe(res=> {
      this.folderParent = res;
      this.folderChange.emit(this.folderParent);
    });
  }
}
