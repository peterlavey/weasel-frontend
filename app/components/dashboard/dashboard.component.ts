import {Component} from '@angular/core';

import {Service} from '../../models/service';

/*const SERVICES:Service[]=[
  {id:1, name:'servicio1', type:'GET'},
  {id:2, name:'servicio2', type:'GET'},
  {id:3, name:'servicio3', type:'POST'}
];*/

@Component({
  selector: 'dashboard',
  templateUrl : './app/components/dashboard/dashboard.html'
})

export class DashboardComponent{
  title='Soy el title';
  variable='asdasd';
  //services=SERVICES;
  selectedService:Service;
  onSelect(service:Service):void{
    this.selectedService=service;
  }
}
