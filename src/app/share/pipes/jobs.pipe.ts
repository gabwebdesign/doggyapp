import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobs'
})
export class JobsPipe implements PipeTransform {
  transform(value: []): string {
    //return `${value} years old`;
    //console.log(value);
    let str=''
    for(let i=0;i<value.length;i++){
        str+=`<div class='row'>
            <div class='col-2 jobs'>${ value[i] }</div>    
        </div>`;
    }
    return str;
  }

}
