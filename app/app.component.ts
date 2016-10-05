import {Component} from '@angular/core';

export class Servicio{
  id:number;
  name:string;
  type:string
}

const SERVICIOS:Servicio[]=[
  {id:1, name:'servicio1', type:'GET'},
  {id:2, name:'servicio2', type:'GET'},
  {id:3, name:'servicio3', type:'POST'}
];

@Component({
  selector: 'my-app',
  template: '{{title}} weeena {{variable}} <div *ngIf="servicioSeleccionado"><input [(ngModel)]="servicioSeleccionado.name" placeholder="name"/></div> <ul><li *ngFor="let servicio of servicios" (click)="onSelect(servicio)">{{servicio.name}}-{{servicio.type}}</li></ul>'
})

export class AppComponent{
  title='Soy el title';
  variable='asdasd';
  servicios=SERVICIOS;
  servicioSeleccionado:Servicio;
  onSelect(servicio:Servicio):void{
    this.servicioSeleccionado=servicio;
  }
}
