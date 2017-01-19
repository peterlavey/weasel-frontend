import { Component, OnInit, Input } from '@angular/core';
import { Rest } from '../rest';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  @Input() rest: Rest;
  constructor() { }

  ngOnInit() {
  }

}
