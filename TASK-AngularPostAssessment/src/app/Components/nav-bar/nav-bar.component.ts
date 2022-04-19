import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _toasterService : ToastrService,private _route : Router) { }

  ngOnInit(): void {
  }

  public logout(){
    if(window.confirm("Do you want to logout?")){
      this._route.navigate(['login']);
    }
  }
}
