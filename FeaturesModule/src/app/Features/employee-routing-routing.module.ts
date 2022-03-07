import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './EmployeeModule/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './EmployeeModule/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './EmployeeModule/edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './EmployeeModule/employee-details/employee-details.component';
import { EmployeeListComponent } from './EmployeeModule/employee-list/employee-list.component';

const routes: Routes = [

  {path:"employeedetails",component:EmployeeDetailsComponent, children:[
    {path:'employeelist',component:EmployeeListComponent,children:[
      {path:'add',component:AddEmployeeComponent},
    {path:'edit',component:EditEmployeeComponent},
    {path:'delete',component:DeleteEmployeeComponent}
    ]}
    
  ]}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingRoutingModule { }
