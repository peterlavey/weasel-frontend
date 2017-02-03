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
  @Input() folder: Folder;
  @Output() folderChange = new EventEmitter<Folder>();
  @ViewChild('fileInput') myFileInput: ElementRef;
  public reader: FileReader;
  public dataReaded: Folder;

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

  searchFile(){
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

  import(importRest: boolean){
    let _importRest = importRest ? '1' : '0';
    $('#confirmIncludeRests').modal('hide');
    $("#fileInput").val('');

    this.dataReaded.folders.splice(0, this.dataReaded.folders.length);
    this._processService.import(this.folder.name, _importRest, this.dataReaded).subscribe(data => {
      if(data.error){
        this._toastr.error(data.error);
      }else{
        this.folder = data;
        this.folderChange.emit(this.folder);
        $('#getRests').click();
      }
    });
  }

  fileChanged(event) {
    if(!this.reader.onload){
      this.reader.onload = (event:any)=>{
        this.dataReaded = JSON.parse(event.target.result);
        $('#confirmIncludeRests').modal('show');
      };
    }
    this.reader.readAsText(event.target.files[0]);
  }

  getFileLater() {
    console.log(this.myFileInput.nativeElement.files[0]);
  }
}
