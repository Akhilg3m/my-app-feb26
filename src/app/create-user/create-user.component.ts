import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { capgeminiEmail } from '../validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  userForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl('',[Validators.required, Validators.min(18), Validators.max(100)]),
    email: new FormControl('', [Validators.required, Validators.email, capgeminiEmail]),
    phone: new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/)]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      pin: new FormControl('', [Validators.required, Validators.min(100000), Validators.max(999999)])
    }),
    type: new FormControl(),
    // busFee: new FormControl(),
    // hostelFee: new FormControl(),
    cards: new FormArray([]),
    images: new FormArray([])
  })

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  get iamgesFormArray(){
    return this.userForm.get('images') as FormArray;
  }


  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        number: new FormControl(),
        cvv: new FormControl(),
      })
    )
  }

  addImage(){
    this.iamgesFormArray.push(
      new FormControl()
    )
  }

  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }

  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:string)=>{
        if(data==='dayScholor'){

          // add busfee
          this.userForm.addControl('busFee', new FormControl('', [Validators.required]));
          // remove hostelfee
          this.userForm.removeControl('hostelFee');

        }
        else if(data=='residential'){

          // add hostelfee
          this.userForm.addControl('hostelFee', new FormControl('', Validators.required));
          // remove busfee
          this.userForm.removeControl('busFee');
          
        }
      }
    )
  }

  submit(){
    console.log(this.userForm);
  }
  
}
