import { Component, OnInit, Input } from '@angular/core';
import { ProcessService } from '../process.service';
import { Folder } from '../folder';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  @Input() folder: Folder;
  checkSelected: boolean;

  constructor(private _processService: ProcessService) {
    this.checkSelected = false;
  }

  ngOnInit() { }

  startRest(): void {
    this._processService.startServices(this.folder.name).subscribe(data => console.info(data));
  }

  stopRest(): void {
    this._processService.stopServices().subscribe(data => console.info(data));
  }

  onChange(state: boolean){
    if(state){
      this.startRest();
    }else{
      this.stopRest();
    }
  }
}
