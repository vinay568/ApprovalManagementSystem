import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';
//import { request } from 'https';

// Interface UserData{
//   id: number;
//   email: any;
//   first_name : string;
//   last_name : string;

// }
@Component({
  selector: 'app-users-api',
  templateUrl: './users-api.component.html',
  styleUrls: ['./users-api.component.css']
})
export class UsersApiComponent implements OnInit {

 public  data: any =[];
  private _http: any;
  isTrue = true;
  constructor(private _service:ApiServiceService) { }

  ngOnInit(): void {

  
    //this.getUsersData();
    this._service.getUsers().subscribe(response => {
      console.log(response);

      this.data = JSON.stringify(response);
      //console.log(this.data);
      this.data = JSON.parse(this.data).data;
      console.log(this.data);
    })
    
  }
  getUsersData(){
    
  }
  Data(){
    this.isTrue = !this.isTrue;
    console.log("hi");
    
    console.log("Hello")
  }

}
