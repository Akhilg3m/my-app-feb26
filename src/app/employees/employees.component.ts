import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  name:string = "";
  company:string = "";
  package:string = "";
  exp:number=0;
  role:string = "";

  employees = [
    { name: "Rahul Sharma", company: "Infosys", package: "12 LPA", exp: 3, role: "Frontend Developer" },
    { name: "Anita Reddy", company: "TCS", package: "10 LPA", exp: 2, role: "Angular Developer" },
    { name: "Vikram Singh", company: "Wipro", package: "15 LPA", exp: 5, role: "Full Stack Developer" },
    { name: "Sneha Patel", company: "Cognizant", package: "18 LPA", exp: 6, role: "Tech Lead" },
    { name: "Arjun Kumar", company: "Accenture", package: "20 LPA", exp: 7, role: "Software Architect" },
    { name: "Priya Nair", company: "Capgemini", package: "9 LPA", exp: 2, role: "UI Developer" },
    { name: "Karthik Rao", company: "HCL", package: "14 LPA", exp: 4, role: "Backend Developer" },
    { name: "Meera Joshi", company: "IBM", package: "16 LPA", exp: 5, role: "DevOps Engineer" },
    { name: "Rohan Gupta", company: "Tech Mahindra", package: "11 LPA", exp: 3, role: "QA Engineer" },
    { name: "Divya Kapoor", company: "Oracle", package: "22 LPA", exp: 8, role: "Solution Architect" }
  ];

  delete(i:number){
    this.employees.splice(i,1);
  }

  add(){

    let employee = {
      name: this.name,
      company: this.company,
      package: this.package,
      exp: this.exp,
      role: this.role
    }

    this.employees.unshift(employee);
  }

  above3exp(){
    this.employees = this.employees.filter((employee:any)=>employee.exp>3);
  }

  tcs(){
    this.employees = this.employees.filter((employee:any)=>employee.company=='TCS');
  } 

  addmr(){
    this.employees = this.employees.map((employee:any)=>{
      employee.name = "Mr. "+employee.name;
      return employee;
    });
  }

  add1yr(){
    this.employees = this.employees.map((employee:any)=>{
      employee.exp++;
      return employee;
    });
  }

  expLH(){
    this.employees.sort((a:any, b:any)=>a.exp-b.exp);
  }

  expHL(){
    this.employees.sort((a:any, b:any)=>b.exp-a.exp);
  }

  total(){
    alert(this.employees.length);
  }


}


