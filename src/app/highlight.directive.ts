import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color:string = "yellow";

  constructor(private elementRef:ElementRef) { }

  @HostListener('mouseenter')
  apply(){
    this.elementRef.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave')
  remove(){
    this.elementRef.nativeElement.style.backgroundColor = 'white';
  }


}