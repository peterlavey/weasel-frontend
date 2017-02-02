import { Component } from '@angular/core';

import { Folder } from './folder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  $folder: Folder;
  breadcrumb: string[];

  constructor(){
    this.$folder;
    this.breadcrumb = [];
    this.breadcrumb.push('root');
  }

  folderChange(folder){
    if(this.$folder && this.$folder.name !== folder.name) this.breadcrumb.push(folder.name);
    this.$folder = folder;
  }
}
