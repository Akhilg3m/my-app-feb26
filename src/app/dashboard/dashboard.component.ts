import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  constructor(private router:Router){}

  logout(){
    // remove token
    sessionStorage.removeItem("accessToken");
    // go to login page
    this.router.navigateByUrl("/login");
  }

}
