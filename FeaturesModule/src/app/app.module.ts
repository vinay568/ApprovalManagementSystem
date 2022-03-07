import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { EmployeeListComponent } from './Features/EmployeeModule/employee-list/employee-list.component';
// import { EmployeeDetailsComponent } from './Features/EmployeeModule/employee-details/employee-details.component';
// import { AddEmployeeComponent } from './Features/EmployeeModule/add-employee/add-employee.component';
// import { EditEmployeeComponent } from './Features/EmployeeModule/edit-employee/edit-employee.component';
// import { DeleteEmployeeComponent } from './Features/EmployeeModule/delete-employee/delete-employee.component';
 import { EmployeeRoutingRoutingModule } from './Features/employee-routing-routing.module';
import { EmployeeRoutingModule } from './Features/employee-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // EmployeeListComponent,
    // EmployeeDetailsComponent,
    // AddEmployeeComponent,
    // EditEmployeeComponent,
    // DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
