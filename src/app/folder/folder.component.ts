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
  @Input() folder: any;
  @Input() folderParent: Folder;
  @Output() folderChange = new EventEmitter<Folder>();

  private buildRequestFolder: any;
  private _newFolder:any;

  constructor(private _processService: ProcessService) { }

  ngOnInit() {
    this.cleanFolderEdit();
    this.buildRequestFolder = {
      name: this.folder
    }
  }

  getFolder(): void {
    this._processService.getFolder(this.folder).subscribe(data => {
      this.folder = data;
      this.folderChange.emit(this.folder);
    });
  }

  openConfirm(event){
    $(`#confirmDeleteFolder-${this.folder}`).modal('show');
    event.stopPropagation();
  }

  closeConfirm(event){
    $(`#confirmDeleteFolder-${this.folder}`).modal('hide');
    event.stopPropagation();
  }

  openEditModal(event){
    $(`#editFolderModal-${this.folder}`).modal('show');
    event.stopPropagation();
  }

  delete(event): void{
    this.closeConfirm(event);
    this._processService.deleteFolder(this.folderParent.name, this.buildRequestFolder).subscribe(res=> {
      this.folderParent = res;
      this.folderChange.emit(this.folderParent);
    });
  }

  editFolder(): void{
    this._processService.editFolder(this.folderParent.name, this._newFolder, this.folder).subscribe(res =>{
      this.folderParent = res;
      this.folderChange.emit(this.folderParent);

      //this.cleanFolderEdit();
    });
  }

  cleanFolderEdit(){
    this._newFolder={
      id:0,
      name:this.folder,
      content:[],
      folders:[]
    };
  }
}
