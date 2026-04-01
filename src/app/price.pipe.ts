import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  pure: false
})
export class PricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "Rs."+value+"/-";
  }

}


