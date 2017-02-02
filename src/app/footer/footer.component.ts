import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Folder } from '../folder';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() directories: string[];
  @Input() folder: Folder;
  @Output() folderChange= new EventEmitter<Folder>();
  public $isStarted: boolean;
  constructor() {
     this.$isStarted = false;
  }

  ngOnInit() { }

  emitParent(folder: Folder){
    this.folderChange.emit(folder);
  }

}
