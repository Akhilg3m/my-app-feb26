import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Inject, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked, OnDestroy{

  // varailbe/property
  public age:number = 23;
  private a:number = 20;
  public interval:any;
  name:string = "hyderabadasdf";

  vehicles:any;

  // constructor
  // auto calling function
  // depency injection
  constructor(private vehicleService:VehicleService){
   this.vehicles = vehicleService.getVehicles();

   console.log("constructor");
    this.interval = setInterval(function(){
      console.log("hiii");
    },2000); 

    console.log("wish:", document.getElementById("wish")?.innerText );
  }

  // life cycle hooks: 8
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges")
  }
  ngOnInit(): void {
    console.log("oninit");
  }
  ngDoCheck(): void {
    console.log("docehck");
  }
  ngAfterContentInit(): void {
    console.log("content init")
  }
  ngAfterContentChecked(): void {
    console.log("cntenct checked")
  }
  ngAfterViewInit(): void {
    console.log("wish:", document.getElementById("wish")?.innerText );
    console.log("viewinit");
  }
  ngAfterViewChecked(): void {
    console.log("view cheked")
  }
  ngOnDestroy(): void {
    // interal, tuimeut, obserable,subejct
    console.log("destory");
    clearInterval(this.interval);
  }


  // custom mehtod/function
  public submit1(value:string):void{
    console.log(value);
  }
  public submit2():number{
    return 20;
  }
  submit3(){

  }

}
