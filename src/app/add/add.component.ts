import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ProcessService } from '../process.service';
import { Rest } from '../rest';
import { Folder } from '../folder';
import { Options } from '../options';

declare var $: any;

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

  constructor(private _processService: ProcessService, private _toastr: ToastsManager, private _vcr: ViewContainerRef) {
    this._toastr.setRootViewContainerRef(_vcr);
    this.clean();

    this._options = {
      port:''
    };

    this.getOptions();
  }

  ngOnInit() {
  }

  createFolder(): void{
    this._processService.createFolder(this.folder.name, this._newFolder).subscribe(res =>{
      this.folder = res;
      console.log(`ADD CREATE FOLDER ${this.folder.folders}`);
      this.folderChange.emit(this.folder);

      this.clean();
    });
  }

  createRest(){
    if(this.validateJSON()){
      this._processService.addRest(this.folder.name, this._newRest).subscribe(res  => {
        this.folder.content.push(Object.assign({}, this._newRest));
        this.folderChange.emit(this.folder);
        this.restChange.emit();

        this.clean();
      });
    }else{
      this._toastr.error('JSON invalido');
    }

  }

  validateJSON(){
    let _isValid = true;
    try{
        this._newRest.response = JSON.parse(this._newRest.response);
    }catch(err){
    	_isValid = false;
    }
    return _isValid;
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

  clean(){
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
}
