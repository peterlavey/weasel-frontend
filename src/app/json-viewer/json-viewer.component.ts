import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.css']
})
export class JsonViewerComponent implements OnInit {
  @Input() json: any;
  @Output() jsonChange: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  changeValue() {
    this.jsonChange.emit(this.json);
  }
}
