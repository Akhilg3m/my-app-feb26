import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeesComponent } from './employees/employees.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PricePipe } from './price.pipe';
import { RolePipe } from './role.pipe';
import { HighlightDirective } from './highlight.directive';
import { CapitalDirective } from './capital.directive';
import { ContactModule } from './contact/contact.module';
import { Vehicles2Component } from './vehicles2/vehicles2.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { TokenInterceptor } from './token.interceptor';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    DirectivesComponent,
    EventRegistrationComponent,
    EmployeesComponent,
    VehiclesComponent,
    PricePipe,
    RolePipe,
    HighlightDirective,
    CapitalDirective,
    Vehicles2Component,
    CreateUserComponent,
    CreateVehicleComponent,
    ViewVehicleComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    ItemsComponent,
    NavComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ContactModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  exports:[
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// boilerplate code