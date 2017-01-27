import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../process.service';
import { Rest } from '../rest';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public rests: Rest[];
  public nameFilter: string;
  constructor(private _processService: ProcessService) {
    this.nameFilter = '' ;
    this.getRests();
  }

  ngOnInit() {
  }

  getRests(): void{
    this._processService.getRests().subscribe(res =>{
      this.rests = res;
    });
  }

  dismiss(){
    console.info('dismiss');
    document.querySelector('.offcanvas').className = 'offcanvas';
  }
}
