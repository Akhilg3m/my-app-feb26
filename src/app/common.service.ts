import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  cartCount:number = 0;

  // create
  cartCountSub:BehaviorSubject<number> = new BehaviorSubject(0);

  // set
  setCount(){
    this.cartCount++;
    this.cartCountSub.next(this.cartCount);
  }

  // get
  getCount(){
    return this.cartCountSub.asObservable();
  }


}
