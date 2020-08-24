import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'StarToNumbers'
})
export class StarToNumbers implements PipeTransform {

  transform(value: string) {
    let val = parseFloat(value);
    //let myArr = [];
    var str: string = '';
    for (let i = 1; i <= val; i++) { 
      str += '⭐';
    }
    return str;
  }

}
