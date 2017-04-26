import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { ProcessService } from '../process.service';
import { Folder } from '../folder';
import { Rest } from '../rest';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() folder: Folder;
  @Output() folderChange = new EventEmitter<Folder>();

  public rests: Rest[];
  public folders: Folder[];
  public nameFilter: string;
  public restSelected: Rest;
  public isFilterRest: boolean;

  constructor(private _processService: ProcessService, private _toastr: ToastsManager, private _vcr: ViewContainerRef) {
    this._toastr.setRootViewContainerRef(_vcr);

    this.nameFilter = '' ;
    this.isFilterRest = true;
    this.getRests();
    this.getFolders();
  }

  ngOnInit() {
  }

  addGroup(folderGroup): void{
    event.stopPropagation();
    this._processService.getAddGroup(this.folder.name, folderGroup).subscribe(res =>{
      this.folder = res;
      this.folderChange.emit(this.folder);
    });
  }

  getRests(): void{
    this._processService.getRests().subscribe(res =>{
      this.rests = res;
    });
  }

  getFolders(): void{
    this._processService.getFolders().subscribe(res =>{
      if(!res.hasOwnProperty('error')) this.folders = res;
    });
  }

  open(name, obj, event){
    if($(`#folder-${name}`).hasClass('open-toggler')){
      $(`#folder-${name}`).removeClass('open-toggler');
      $(`#rest-of-folder-${name}`).removeClass('open-toggler');
      //obj.isOpen = false;
    }else{
      $(`#folder-${name}`).addClass('open-toggler');
      $(`#rest-of-folder-${name}`).addClass('open-toggler');
      //obj.isOpen = true;
    }

    event.stopPropagation();
  }

  addRestToFolder(rest: Rest){
    this._processService.addRestToFolder(this.folder.name, rest).subscribe(res =>{
      this.folder = res;
      this.folderChange.emit(this.folder);
      $('#getFolders').click();
    });
  }

  deleteRest(){
    this._processService.deleteRest(this.folder.name, this.restSelected).subscribe(res =>{
      this.getRests();
      this.folder = res;
      this.folderChange.emit(this.folder);
      this.closeConfirm();
      $('#getFolders').click();
    });
  }

  dismiss(){
    document.querySelector('.offcanvas').className = 'offcanvas';
  }

  openConfirm(rest: Rest, event: any){
    this.restSelected = rest;
    $('#confirmDeleteRest').modal('show');
    event.stopPropagation();
  }

  closeConfirm(){
    $('#confirmDeleteRest').modal('hide');
  }

  emitParent(folder: Folder){
    this.folderChange.emit(folder);
  }

  validateToAdd(rest: Rest){
    let isValid = true;
    this.folder.content.forEach((_rest)=>{
      if(_rest.name === rest.name) isValid = false;
    });

    if(isValid){
      this.addRestToFolder(rest);
    }else{
      this._toastr.error('Este rest ya se encuentra en la ruta actual');
    }
  }

  changeFilterSearch(){
    if(this.isFilterRest){
      this.isFilterRest = false;
    }else{
      this.isFilterRest = true;
    }
  }

  deleteSpaces(str: string):string{
    return str.replace(/ /g,'');
  }
}
