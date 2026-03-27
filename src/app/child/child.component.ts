import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() ac:string = "";
  

  bc:string = "";
  @Output() bEvent:EventEmitter<string> = new EventEmitter(); //create

  emit(){
    this.bEvent.emit(this.bc); //emit
  }

}
