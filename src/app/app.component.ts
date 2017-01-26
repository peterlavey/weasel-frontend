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
  }

  folderChange(folder){
    this.$folder = folder;
    this.breadcrumb.push(folder.name);
  }
}
