import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessService } from '../../process.service';
import { Folder } from '../../folder';

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

  getFolderByName(): void {
    this._processService.getFolderByName(this.folder).subscribe(data => {
      this.folder = data;
      this.folderChange.emit(this.folder);
    });
  }

  openConfirm(event){
    $(`#confirmDeleteFolder-${this.deleteSpaces(this.folder)}`).modal('show');
    event.stopPropagation();
  }

  closeConfirm(event){
    $(`#confirmDeleteFolder-${this.deleteSpaces(this.folder)}`).modal('hide');
    event.stopPropagation();
  }

  openEditModal(event){
    $(`#editFolderModal-${this.deleteSpaces(this.folder)}`).modal('show');
    event.stopPropagation();
  }

  delete(event): void{
    this.closeConfirm(event);
    this._processService.deleteFolder(this.folderParent.name, this.buildRequestFolder).subscribe(res=> {
      $('#getFolders').click();
      this.folderParent = res;
      this.folderChange.emit(this.folderParent);
    });
  }

  enterKeyEdit(event): void{
    if(event.keyCode === 13){
      $(`#${event.currentTarget.id}`).modal('hide');
      this.editFolder();
    }
  }

  editFolder(): void{
    this._processService.editFolder(this.folderParent.name, this._newFolder, this.folder).subscribe(res =>{
      this.folderParent = res;
      this.folderChange.emit(this.folderParent);
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

  deleteSpaces(str: string):string{
    return str.replace(/ /g,'');
  }

}
