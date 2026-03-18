import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicles2',
  templateUrl: './vehicles2.component.html',
  styleUrls: ['./vehicles2.component.css']
})
export class Vehicles2Component {

  term:string="";
  column:string="";
  order:string="";
  page:number = 1;

  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {
    this.getVehiclesWithQueryParams();
  }

  getVehiclesWithQueryParams(){
    this.vehicleService.getVehiclesWithQueryParams(this.term, this.column, this.order, this.page).subscribe(
      (data: Vehicle[]) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }

  search(){
    this.getVehiclesWithQueryParams();
  }

  isAsc:boolean = false;
  sort(column:string){
    this.column = column;

    this.isAsc = !this.isAsc;
    this.order = this.isAsc?'asc':'desc';

    this.getVehiclesWithQueryParams();
  }

  pageVehicles(page:number){
    this.page = page;
    this.getVehiclesWithQueryParams();
  }

}
