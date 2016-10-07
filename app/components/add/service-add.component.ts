import {Component} from '@angular/core';

import {Service} from '../../models/service';

@Component({
  selector:'service-add',
  templateUrl:'./app/components/add/service-add.html'
})

export class ServiceAddComponent {
  service:Service={
    id:'.',
    name:'.',
    type:'GET',
    body:'{}'
  };
  onSend(){
    this.service.body=JSON.parse(JSON.stringify(eval("(" + this.service.body + ")")));
    console.info(this.service);
  };
}
