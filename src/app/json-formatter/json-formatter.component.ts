import { Component, OnInit, Input } from '@angular/core';
declare var Object: any
declare var $:any;

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.css']
})
export class JsonFormatterComponent implements OnInit {
  @Input() json:any;
  @Input() isOpen:boolean;
  public formattedJson:any;

  constructor() {

  }

  ngOnInit() {
    let values = Object.values(this.json);
    let keys = Object.keys(this.json);

    this.formattedJson = [];

    values.forEach((val, index)=>{
      switch(typeof val){
        case 'string':
          this.formattedJson.push({'attribute':keys[index], 'value':`"${val}"`, 'color':'green', 'haveContain':false, 'cursor':'text', 'isOpen':false});
        break;
        case 'number':
          this.formattedJson.push({'attribute':keys[index], 'value':val, 'color':'blue', 'haveContain':false, 'cursor':'text', 'isOpen':false});
        break;
        case 'boolean':
          this.formattedJson.push({'attribute':keys[index], 'value':val, 'color':'red', 'haveContain':false, 'cursor':'text', 'isOpen':false});
        break;
        case 'object':
          if(val === null) {
            this.formattedJson.push({'attribute':keys[index], 'value':val, 'color':'yellow', 'haveContain':false, 'cursor':'text', 'isOpen':false});
          }else{
            if(typeof val.push === 'function'){
              this.formattedJson.push({'attribute':keys[index], 'value':val, 'color':'white', 'haveContain':true, 'type':`Array[${val.length}]`, 'cursor':'pointer', 'isOpen':false});
            }else{
              this.formattedJson.push({'attribute':keys[index], 'value':val, 'color':'white', 'haveContain':true, 'type':'Object', 'cursor':'pointer', 'isOpen':false});
            }
          }
        break;
      }
    })
  }

  open(id, obj, event){
    if($(`#li-${id}`).hasClass('open')){
      $(`#li-${id}`).removeClass('open');
      obj.isOpen = false;
    }else{
      $(`#li-${id}`).addClass('open');
      obj.isOpen = true;
    }

    event.stopPropagation();
  }

  getCursor(haveContain){
    if(haveContain){
      return 'pointer';
    }else{
      return 'text';
    }
  }

}
