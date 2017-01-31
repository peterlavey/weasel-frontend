import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessService } from '../process.service';
import { Folder } from '../folder';
import { Rest } from '../rest';

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
  constructor(private _processService: ProcessService) {
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

  deleteRest(rest: Rest){
    this._processService.deleteRest(this.folder.name, rest).subscribe(res =>{
      this.getRests();
      this.folder = res;
      this.folderChange.emit(this.folder);
    });
  }

  dismiss(){
    console.info('dismiss');
    document.querySelector('.offcanvas').className = 'offcanvas';
  }

  emitParent(folder: Folder){
    this.folderChange.emit(folder);
  }
}
