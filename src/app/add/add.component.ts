import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../process.service';
import { Rest } from '../rest';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private _rest:Rest;
  
  constructor(private _processService: ProcessService) {

  }

  ngOnInit() {
    this._rest={
      name:'',
      path:'',
      response:''
    };
  }

  addRest(){
    this._processService.addService(this._rest).subscribe(res  => console.log(res), error =>  console.error(error));
  }
}
