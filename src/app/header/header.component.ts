import { Component, OnInit, Input } from '@angular/core';
import { Folder } from '../folder';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() folder: Folder;
  constructor() { }

  ngOnInit() {
  }

  openModal(){
    document.querySelector('.offcanvas').className = 'offcanvas open';
  }

  export(){
    this.download(`${this.folder.name}.json`, JSON.stringify(this.folder));
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
}
