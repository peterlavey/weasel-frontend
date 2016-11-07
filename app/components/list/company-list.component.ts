import {Component, Input} from '@angular/core';

import {Company} from '../../models/company';

@Component({
  selector:'company-list',
  templateUrl:'./app/components/list/company-list.html'
})

export class CompanyListComponent{
  private _companies:Company[]=[
    {id:'1', name:'Twitter', salary:'$500000', teamwork:3, facilities:2, languages:[{name:'javascript', level:2}, {name:'java', level:5}]},
    {id:'2', name:'Google', salary:'$500000', teamwork:3, facilities:2, languages:[{name:'javascript', level:4}]},
    {id:'3', name:'Facebook', salary:'$500000', teamwork:3, facilities:2, languages:[{name:'javascript', level:2}, {name:'java', level:5}, {name:'php', level:1}]}
  ];
}
