import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapital]'
})
export class CapitalDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('keyup')
  capital(){
    this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.toUpperCase();
  }

}
