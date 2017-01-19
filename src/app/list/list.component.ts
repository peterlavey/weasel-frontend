import { Component, OnInit } from '@angular/core';
import { Rest } from '../rest';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  rests: Rest[];
  constructor() {
    this.rests = [
      {id:'1', name:'caca', type:'POST'},
      {id:'2', name:'qeqe', type:'GET'},
      {id:'3', name:'tototo', type:'GET'}
    ]
  }

  ngOnInit() {

  }

}
