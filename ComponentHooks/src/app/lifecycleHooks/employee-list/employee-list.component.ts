import { Component, OnInit } from '@angular/core';
import {Employee} from 'src/app/Models/employee.model'
import { __assign } from 'tslib';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[]= [
    {id:1, name:'Vinay',location:'Andhra',designation:'SE1',salary:1000000}
]
  constructor() { }
  

  ngOnInit(): void {
  }
selectedEmployee: Employee = new Employee();
public displayEmp(emp : Employee):void{
  this.selectedEmployee = Object.assign({},emp);
}
public updateEmployeeDetails(emp : Employee):void{
  console.log(emp);
  var e = this.employees.find(e => e.id);
  Object.assign(e,emp);
  alert("Details Updated");
}
}
