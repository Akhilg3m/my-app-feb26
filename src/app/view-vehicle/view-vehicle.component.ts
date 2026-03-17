import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent {

  id:string = "";
  vehicle:any = {};

  constructor(private activatedRoute:ActivatedRoute, 
    private vehicleService:VehicleService){
      
    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;
        vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle = data;
          }
        )
      }
    )
  }

}
