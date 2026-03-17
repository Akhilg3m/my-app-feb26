import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeesComponent } from './employees/employees.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ContactCeoComponent } from './contact/contact-ceo/contact-ceo.component';
import { Vehicles2Component } from './vehicles2/vehicles2.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { AuthGuard } from './auth.guard';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', canActivate:[AuthGuard], component: DashboardComponent, children:[
    {path:'home', component: HomeComponent},
    {path:'welcome', component: WelcomeComponent},
    {path:'data-binding', component: DataBindingComponent},
    {path:'calculator', component: CalculatorComponent},
    {path:'directives', component: DirectivesComponent},
    {path:'event-registration', component: EventRegistrationComponent},
    {path:'employees', component:EmployeesComponent},
    {path:'vehicles', component:VehiclesComponent},
    {path:'contact-ceo', component:ContactCeoComponent},
    {path:'vehicles2', component:Vehicles2Component},
    {path:'create-user', component:CreateUserComponent},
    {path:'create-vehicle', component:CreateVehicleComponent},
    {path:'view-vehicle/:id', component:ViewVehicleComponent},
    {path:'payment', loadChildren:()=>import('./payment/payment.module').then(m=>m.PaymentModule)}
  ]},
  {path:'', component: LoginComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
