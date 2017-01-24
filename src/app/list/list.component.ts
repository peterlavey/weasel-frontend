import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../process.service';
import { Rest } from '../rest';
import { Folder } from '../folder';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  folder: Folder;
  rests: Rest[];
  constructor(private _processService: ProcessService) {
    this.getFolder();
  }

  ngOnInit() {

  }

  getFolder(): void {
    this._processService.getFolder().subscribe(data => {
      this.folder = data;
    });
  }

  getRests(): void {
    this._processService.getServices().subscribe(data => {
      this.rests = data;
    });
  }

  startRest(): void {
    this._processService.startServices().subscribe(data => console.info(data));
  }

  stopRest(): void {
    this._processService.stopServices().subscribe(data => console.info(data));
  }
}
