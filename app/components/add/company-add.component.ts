import {Component} from '@angular/core';

import {Company} from '../../models/company';

@Component({
  selector:'company-add',
  templateUrl:'./app/components/add/company-add.html'
})

export class CompanyAddComponent {
  company:Company={
    id:'.',
    name:'.',
  };
  onSend(){
    console.info(this.company);
  };
}
