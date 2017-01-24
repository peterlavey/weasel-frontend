import { Component, OnInit, Input } from '@angular/core';
import { Folder } from '../folder';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  @Input() folder: Folder;
  constructor() { }

  ngOnInit() {
  }

}
