import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingRoutingModule } from './employee-routing-routing.module';
import { EmployeeDetailsComponent } from './EmployeeModule/employee-details/employee-details.component';
import { EmployeeListComponent } from './EmployeeModule/employee-list/employee-list.component';
import { AddEmployeeComponent } from './EmployeeModule/add-employee/add-employee.component';
import { EditEmployeeComponent } from './EmployeeModule/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './EmployeeModule/delete-employee/delete-employee.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent
  ],
  
    
  imports: [
    CommonModule,
    EmployeeRoutingRoutingModule
  ]
})
export class EmployeeRoutingModule { }
