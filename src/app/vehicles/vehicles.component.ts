import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  vehicles: any = [];

  constructor(private vehicleService: VehicleService) {

    vehicleService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )

  }

  term: string = "";
  filterVehicles() {
    this.vehicleService.filterVehicles(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }

  pagedVehicles(page:number) {
    this.vehicleService.pagedVehicles(page).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }
  isAsc:boolean = false;
  sortVehicles(column:string) {
    this.isAsc = !this.isAsc;
    this.vehicleService.sortVehicles(column,this.isAsc?'asc':'desc').subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }

  deleteVehicle(id: string) {
    this.vehicleService.deleteVehicle(id).subscribe(
      (data: any) => {
        alert("deleted sucessfully!!!!");
        location.reload();
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }

}
