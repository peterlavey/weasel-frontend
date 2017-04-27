import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessService } from '../process.service';
import { Folder } from '../folder';

declare var $: any;

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Input() folder: Folder;
  @Input() folderParent: Folder;
  @Output() folderChange = new EventEmitter<Folder>();
  constructor(private _processService: ProcessService) { }

  ngOnInit() {
  }

  open(name, obj, event){
    if($(`#folder-group-${name}`).hasClass('open-toggler')){
      $(`#folder-group-${name}`).removeClass('open-toggler');
      $(`#rest-group-${name}`).removeClass('open-toggler');
      //obj.isOpen = false;
    }else{
      $(`#folder-group-${name}`).addClass('open-toggler');
      $(`#rest-group-${name}`).addClass('open-toggler');
      //obj.isOpen = true;
    }

    event.stopPropagation();
  }

  removeGroup(): void{
    event.stopPropagation();
    this._processService.removeGroup(this.folderParent.name, this.folder.name).subscribe(res=> {
      this.folder = res;
      this.folderChange.emit(this.folder);
      //this.folderChange.emit(this.folder);
      //$('#getFolders').click();
    });
  }

  getStatusRest(rest: any){
    let firstDigit = rest.status.toString().charAt(0);
    return firstDigit === '2' ? 'success' : 'danger';
  }

  deleteSpaces(str: string):string{
    return str.replace(/ /g,'');
  }

}
