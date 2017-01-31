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
  public nameFilter: string;
  public restSelected: Rest;

  constructor(private _processService: ProcessService, private _toastr: ToastsManager, private _vcr: ViewContainerRef) {
    this._toastr.setRootViewContainerRef(_vcr);

    this.nameFilter = '' ;
    this.getRests();
  }

  ngOnInit() {
  }

  getRests(): void{
    this._processService.getRests().subscribe(res =>{
      this.rests = res;
    });
  }

  addRestToFolder(rest: Rest){
    this._processService.addRestToFolder(this.folder.name, rest).subscribe(res =>{
      this.folder = res;
      this.folderChange.emit(this.folder);
    });
  }

  deleteRest(){
    this._processService.deleteRest(this.folder.name, this.restSelected).subscribe(res =>{
      this.getRests();
      this.folder = res;
      this.folderChange.emit(this.folder);
      this.closeConfirm();
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

  /*removeDuplicates(){
    let _indexsToRemove = [];

    this.rests.forEach((rest, index)=>{
      this.folder.content.forEach((_rest)=>{
        if(_rest.name === rest.name) _indexsToRemove.push(index);
      });
    });

    console.info(`REST: ${this.rests}`);
    console.log(_indexsToRemove);
  }*/
}
