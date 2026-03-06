import { Component } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css'],
})
export class EventRegistrationComponent {
  
  name:string = "";
  users:string[] = ["ram", "john", "raj"];

  register(){
    this.users.push(this.name);
  }

  delete(i:number){
    this.users.splice(i,1);
  }

}
