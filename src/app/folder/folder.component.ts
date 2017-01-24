import { Component, OnInit, Input } from '@angular/core';
import { ProcessService } from '../process.service';
import { Folder } from '../folder';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  @Input() folder: Folder;
  constructor(private _processService: ProcessService) { }

  ngOnInit() {
  }
}
