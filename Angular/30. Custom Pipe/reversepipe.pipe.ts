import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversepipe'
})
export class ReversepipePipe implements PipeTransform {

  transform(value:any): unknown {

    let item=""
    // return value+" hello";

    for(let i=value.length-1;i>=0;i--){
      item+=value[i]
    }
    return item;
  }

}
