import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
@Input() employee: Employee = new Employee;
@Output() employeeChange: EventEmitter<Employee> = new EventEmitter<Employee>();
  constructor() { }

  ngOnInit(): void {
  }
public updateDetails():void{
  this.employeeChange.emit(this.employee);
}
}
