import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value: unknown, ...args:any): unknown {
    if(args[0]>4){
      return value+"(SD)"
    }
    else if(args[0]<4 && args[0]>=0){
      return value+"(JD)"
    }
    else{
      return value;
    }
  }

}
