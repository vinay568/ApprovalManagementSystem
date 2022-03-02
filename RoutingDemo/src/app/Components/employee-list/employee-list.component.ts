import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
details:any=[];
filterId:any="";
  constructor( private _empService:EmployeeService) { }

  ngOnInit(): void {
    this._empService.getEmployees().subscribe(response=>{
      this.details=response;
    })
  }
}
