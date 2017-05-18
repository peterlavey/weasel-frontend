import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessService } from '../../process.service';
import { Rest } from '../../rest';
import { Folder } from '../../folder';
import { ConstantsService } from '../../constants.service';

declare var $: any;

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  @Input() isRunning: boolean;
  @Input() rest: Rest;
  @Input() folder: Folder;
  @Output() folderChange = new EventEmitter<Folder>();

  public badgeState: string;
  public statusList: any;
  private _newRest: any;
  public isOpen: boolean;

  constructor(private _processService: ProcessService) {
    this.statusList = new ConstantsService();
    this.isOpen = false;
  }

  ngOnInit(): void {
    const firstDigit = this.rest.status.toString().charAt(0);
    this.badgeState = firstDigit === '2' ? 'success' : 'danger';
    this.cleanRestEdit();
  }

  removeRest(): void {
    this._processService.removeRest(this.folder.name, this.rest).subscribe(res => {
      this.folder = res;
      this.folderChange.emit(this.folder);
      $('#getFolders').click();
    });
  }

  openEditModal(): void {
    $(`#editRestModal-${this.deleteSpaces(this.rest.name)}`).modal('show');
  }

  enterKeyEdit(event): void{
    if (event.keyCode === 13) {
      $(`#editRestModal-${this.deleteSpaces(this.rest.name)}`).modal('hide');
      this.editRest();
    }
  }

  editRest(){
    if(this.validateJSON()){
      this._processService.editRest(this.folder.name, this.rest).subscribe(res  => {
        this.folder = res;
        this.folderChange.emit(this.folder);
        $('#getRests').click();
      });
    }
  }

  validateJSON() {
    let _isValid = true;
    try {
        this.rest.response = JSON.parse(this._newRest.response);
        this.rest.name = this._newRest.name;
        this.rest.status = this._newRest.status;
        this.rest.path = this._newRest.path;
    } catch (err) {
      _isValid = false;
    }
    return _isValid;
  }

  cleanRestEdit() {
    this._newRest = {
      name: this.rest.name,
      path: this.rest.path,
      status: this.rest.status,
      response: JSON.stringify(this.rest.response, null, '\t')
    };
  }

  openJson() {
    if (this.isOpen) {
      this.isOpen = false;
    }else {
      this.isOpen = true;
    }
  }

  deleteSpaces(str: string): string{
    return str.replace(/ /g, '');
  }
}
