import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessService } from '../../process.service';
import { Folder } from '../../folder';

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

  open(name, obj, event) {
    if ($(`#folder-group-${this.deleteSpaces(name)}`).hasClass('open-toggler')) {
      $(`#folder-group-${this.deleteSpaces(name)}`).removeClass('open-toggler');
      $(`#rest-group-${this.deleteSpaces(name)}`).removeClass('open-toggler');
    } else {
      $(`#folder-group-${this.deleteSpaces(name)}`).addClass('open-toggler');
      $(`#rest-group-${this.deleteSpaces(name)}`).addClass('open-toggler');
    }

    event.stopPropagation();
  }

  removeGroup(): void {
    event.stopPropagation();
    this._processService.removeGroup(this.folderParent.name, this.folder.name).subscribe(res => {
      this.folder = res;
      this.folderChange.emit(this.folder);
    });
  }

  getStatusRest(rest: any) {
    const firstDigit = rest.status.toString().charAt(0);
    return firstDigit === '2' ? 'success' : 'danger';
  }

  deleteSpaces(str: string): string {
    return str.replace(/ /g, '');
  }

}
