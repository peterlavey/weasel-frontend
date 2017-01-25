import { Component, OnInit, Input } from '@angular/core';
import { ProcessService } from '../process.service';
import { Rest } from '../rest';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private _rest:Rest;
  @Input() directory: string;

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
    this._processService.addService(this.directory, this._rest).subscribe(res  => this._processService.getFolder(this.directory), error =>  console.error(error));
  }
}
