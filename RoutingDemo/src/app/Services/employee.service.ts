import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../Models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
empdetails : Employee[];
  constructor() {
    this.empdetails= [
      new Employee(101,'Vinay','USA','Male',true),
      new Employee(102,'Nikhil','Finland','Male',true),
      new Employee(103,'Vamshi','India','Male',true),
      new Employee(104,'Ajay','UK','Male',false),
      new Employee(105,'Rohit','Canada','Male',true),
      new Employee(106,'Sumit','Germany','Male',false)

    ]
   }

   public getEmployees(): Observable<Employee[]>{
    return of(this.empdetails);
  }

  // public getEmployeeById(id: number):Observable<Employee>{

  //  const emp=this.empdetails.find(x=>x.id==id);
  //  return of(emp);
  // }
}
