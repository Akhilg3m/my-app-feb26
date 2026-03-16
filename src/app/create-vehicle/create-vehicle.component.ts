import { Component } from '@angular/core';
import { FormControl, FormGroup, ɵInternalFormsSharedModule } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css'],
})
export class CreateVehicleComponent {

  vehicleForm:FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    cost: new FormControl(),
    tyres: new FormControl()
  })

  constructor(private vehicleService:VehicleService){}

  submit(){
    console.log(this.vehicleForm);
    this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("vehicle created successfully!!!");
        this.vehicleForm.reset();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

}
