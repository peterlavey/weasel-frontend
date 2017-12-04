import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { ProcessService } from '../process.service';
import { Folder } from '../folder';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() folder: any;
  @Input() isRunning: boolean;
  @Output() folderChange = new EventEmitter<Folder>();
  @ViewChild('fileInput') myFileInput: ElementRef;
  public reader: FileReader;
  public dataReaded: any;
  public importType: string;
  public folderHAR: string;

  constructor(private _processService: ProcessService, private _toastr: ToastsManager, private _vcr: ViewContainerRef) {
    this.reader = new FileReader();
    this._toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
  }

  openModal(){
    document.querySelector('.offcanvas').className = 'offcanvas open';
  }

  export(){
    this.download(`${this.folder.name}.json`, JSON.stringify(this.folder));
  }

  searchFile(type){
    this.importType = type;
    document.querySelector('input').click();
  }

  download(filename, text) {
    let pom = document.createElement('a');
    pom.setAttribute('href', `data:text/plain;charset=utf-8, ${encodeURIComponent(text)}`);
    pom.setAttribute('download', filename);

    if (document.createEvent) {
      let event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      pom.dispatchEvent(event);
    }else{
      pom.click();
    }
  }

  import(importRest: boolean) {
    let _importRest = importRest ? '1' : '0';

    $("#fileInput").val('');

    if (this.importType === 'HAR') {
      $('#setNameHARFolder').modal('hide');
      this.dataReaded = this.getFormatHAR();
    }else {
      $('#confirmIncludeRests').modal('hide');
      this.dataReaded.folders.splice(0, this.dataReaded.folders.length);
    }
    this._processService.import(this.folder.name, _importRest, this.dataReaded).subscribe(data => {
      if (data.error) {
        this._toastr.error(data.error);
      }else {
        this.folder = data;
        this.folderChange.emit(this.folder);
        $('#getRests').click();
      }
    });
  }

  getFormatHAR() {
    let dataReadedTmp = [];
    let folderTmp = {id: 3, name: '', content: [], folders: []};
    this.dataReaded.log.entries.forEach(function(har){
      if (har.response.content.mimeType === 'application/json') {
        let data = {name: '', path: '', status: '', response: ''};
        data.name = har.request.url.split('/').splice(4, har.request.url.split('/').length).join(' ');
        data.path = `/${har.request.url.split('/').slice(3, har.request.url.length).join('/')}`;
        data.status = har.response.status;
        data.response =  typeof har.response.content.text === 'undefined' ? {} : JSON.parse(har.response.content.text);

        dataReadedTmp.push(data);
      }
    });

    folderTmp.name = this.folderHAR;
    folderTmp.content = dataReadedTmp;

    return folderTmp;
  }

  fileChanged(event) {
    if(!this.reader.onload) {
      this.reader.onload = (event: any) => {
        this.dataReaded = JSON.parse(event.target.result);
        if (this.importType === 'HAR') {
          $('#setNameHARFolder').modal('show');
        }else {
          $('#confirmIncludeRests').modal('show');
        }
      };
    }
    this.reader.readAsText(event.target.files[0]);
  }

  isNotRunneable(): boolean {
    let _isNotRunneable = false;
    if(this.folder){
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
    }

    return _isNotRunneable;
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
}
