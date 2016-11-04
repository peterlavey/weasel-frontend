import {Component} from '@angular/core';

import {Company} from '../../models/company';

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
  selectedCompany:Company;
  onSelect(company:Company):void{
    this.selectedCompany=company;
  }
}
