import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Folder } from '../folder';

declare var $: any;

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
    console.log(`este es el folder ${this.folder}`)
    this.folderChange.emit(folder);
  }

  validateProperty(obj:any, property:string){
    return obj.hasOwnProperty(property);//obj.hasOwnProperty(property);
  }
}
