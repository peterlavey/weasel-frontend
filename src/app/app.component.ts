import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ProcessService } from './process.service';
import { Folder } from './folder';

declare var cheet: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  $folder: Folder;
  breadcrumb: string[];
  $isRunning: boolean;

  constructor(private _toastr: ToastsManager, private _vcr: ViewContainerRef, private _processService: ProcessService){
    this.$folder;
    this.$isRunning = false;
    this.breadcrumb = [];
    this.breadcrumb.push('root');
    this._toastr.setRootViewContainerRef(_vcr);
    //Konami code
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', ()=>{
      document.querySelector('img').style.display = 'inline';
      this._toastr.info('Konami code! Logro desbloqueado');
    });

    window.onbeforeunload = ()=> {
      return this._processService.stopServices().subscribe(res=> console.log('Finish Him!'));
    }
  }

  folderChange(folder){
    if(this.$folder && this.$folder.name !== folder.name) this.breadcrumb.push(folder.name);
    this.$folder = folder;
  }
}
