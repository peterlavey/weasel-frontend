import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessService } from '../process.service';
import { Rest } from '../rest';
import { Folder } from '../folder';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private _newRest:any;
  private _newFolder:any;

  @Input() folder: Folder;
  @Output() folderChange= new EventEmitter<Folder>();

  constructor(private _processService: ProcessService) {
    this._newFolder={
      id:0,
      name:'',
      content:[],
      folders:[]
    };

    this._newRest={
      name:'',
      path:'',
      response:''
    };
  }

  ngOnInit() { }

  createFolder(): void{
    this._processService.createFolder(this.folder.name, this._newFolder).subscribe(res =>{
      this.folder.folders.push(this._newFolder.name);
      this.folderChange.emit(this.folder);
    });
  }

  createRest(){
    this._processService.addService(this.folder.name, this._newRest).subscribe(res  => {
      this.folder.content.push(this._newRest);
      this.folderChange.emit(this.folder);
    });
  }
}
