import { Pipe, PipeTransform } from '@angular/core';
import { Rest } from './rest';

@Pipe({
  name: 'byname'
})
export class BynamePipe implements PipeTransform {

  transform(items: Rest[], args?: any): any {
    if(items) return items.filter(item => item.name.indexOf(args) !== -1);
  }

}
