import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessService } from '../process.service';
import { Folder } from '../folder';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  @Input() folder: Folder;
  @Output() isStarted = new EventEmitter<boolean>();
  checkSelected: boolean;

  constructor(private _processService: ProcessService) {
    this.checkSelected = false;
    this.isStarted.emit(false);
  }

  ngOnInit() { }

  startRest(): void {
    this._processService.startServices(this.folder.name).subscribe(data => this.isStarted.emit(true));
  }

  stopRest(): void {
    this._processService.stopServices().subscribe(data => this.isStarted.emit(false));
  }

  onChange(state: boolean){
    if(state){
      this.startRest();
    }else{
      this.stopRest();
    }
  }
}
