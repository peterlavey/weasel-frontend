import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessService } from '../process.service';
import { Folder } from '../folder';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() directories: string[];
  @Input() folder: any;
  @Input() isRunning: boolean;
  @Output() folderChange= new EventEmitter<Folder>();
  @Output() isRunningChange = new EventEmitter<boolean>();

  constructor(private _processService: ProcessService) {
  }

  ngOnInit() { }

  startRest(): void {
    document.querySelector('.offcanvas').className = 'offcanvas';
    this._processService.startServices(this.folder.name).subscribe(data => this.isRunningChange.emit(true));
  }

  stopRest(): void {
    this._processService.stopServices().subscribe(data => this.isRunningChange.emit(false));
  }

  handlerServices(){
    if(!this.isRunning){
      this.startRest();
      this.isRunning = true;
    }else{
      this.stopRest();
      this.isRunning = false;
    }
  }

  emitParent(folder: Folder){
    console.log(`este es el folder ${this.folder}`)
    this.folderChange.emit(folder);
  }

  validateProperty(obj:any, property:string){
    return obj.hasOwnProperty(property);
  }

  hasGroups(): boolean{
    let _hasGroups = false;
    if(this.folder.hasOwnProperty('groups')) {
      if(this.folder.groups.length) {
        _hasGroups = true;
      }
    }

    return _hasGroups;
  }

  isNotRunneable(): boolean{
    let _isNotRunneable = false;

    if(this.folder.content.length) {
      _isNotRunneable = false;
    }

    if(this.folder.hasOwnProperty('groups')) {
      if(this.folder.groups.length) {
        _isNotRunneable = false;
      }
    }

    if(this.folder.folders.length) {
      _isNotRunneable = true;
    }

    return _isNotRunneable;
  }
}
