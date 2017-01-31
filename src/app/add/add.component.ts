import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessService } from '../process.service';
import { Rest } from '../rest';
import { Folder } from '../folder';
import { Options } from '../options';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private _newRest:any;
  private _newFolder:any;
  private _options: any;
  public port: string;

  @Input() folder: Folder;
  @Output() folderChange = new EventEmitter<Folder>();
  @Output() restChange = new EventEmitter<any>();

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

    this._options = {
      port:''
    };

    this.getOptions();
  }

  ngOnInit() {
  }

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
      this.restChange.emit();
    });
  }

  getOptions(){
    this._processService.getOptions().subscribe((res)=> {
      this._options = res;
      this.updatePortDOM();
    });
  }

  saveOptions(){
    this._processService.saveOptions(this._options).subscribe(res =>{
      this.updatePortDOM();
    });
  }

  updatePortDOM(){
    this.port = this._options.port;
    document.querySelector('#port').innerHTML = this.port;
  }
}
