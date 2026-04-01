import { Component } from '@angular/core';
import { FormControl, FormGroup, ɵInternalFormsSharedModule } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    cost: new FormControl(),
    tyres: new FormControl()
  })

  id: string = "";
  constructor(private vehicleService: VehicleService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;
        vehicleService.getVehicle(data.id).subscribe(
          (data: Vehicle) => {
            this.vehicleForm.patchValue(data);
          }
        )
      }
    )
  }

  submit() {
    console.log(this.vehicleForm);

    if (this.id) {
      // edit
      this.vehicleService.editVehicle(this.id, this.vehicleForm.value).subscribe(
        (data: Vehicle) => {
          alert("vehicle edited successfully!!!");
          this.vehicleForm.reset();
        },
        (err: any) => {
          alert("internal server error");
        }
      )
    }
    else {
      // create
      this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
        (data: Vehicle) => {
          alert("vehicle created successfully!!!");
          this.vehicleForm.reset();
        },
        (err: any) => {
          alert("internal server error");
        }
      )
    }
  }

}
