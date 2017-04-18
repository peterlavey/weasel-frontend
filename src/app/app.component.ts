import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Folder } from './folder';

declare var cheet: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  $folder: Folder;
  breadcrumb: string[];

  constructor(private _toastr: ToastsManager, private _vcr: ViewContainerRef){
    this.$folder;
    this.breadcrumb = [];
    this.breadcrumb.push('root');
    this._toastr.setRootViewContainerRef(_vcr);
    //Konami code
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', ()=>{
      document.querySelector('img').style.display = 'inline';
      this._toastr.info('Konami code! Logro desbloqueado');
    });
  }

  folderChange(folder){
    if(this.$folder && this.$folder.name !== folder.name) this.breadcrumb.push(folder.name);
    this.$folder = folder;
  }
}
