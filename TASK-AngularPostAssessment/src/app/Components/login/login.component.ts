import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm : FormGroup;
public user:any;
public data:any;
public isAuthenticated = false;
  constructor(private formBuilder: FormBuilder, private route: Router, private http: HttpClient,private account: AccountService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  
  public login(){
    this.account.login().subscribe(res=> {
      this.data=res;
      this.findUser();
      this.userChecked();
    },
    error=>{console.log(error);})
    
  }
  public findUser(){
    this.user = this.data.find((a:any)=> {
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    });
    console.log(this.user);
  }
  public userChecked(){
    if(this.user){
    
      alert("Login Successfull");
      this.loginForm.reset();
      if(this.user.isAdmin)
      {
        localStorage.setItem('role','1');
        this.isAuthenticated=true;
        this.route.navigate(['adminHome']);
      }
      else{
        localStorage.setItem('role','2');
        this.isAuthenticated=true;
        this.route.navigate(['home']);
      }
    }
    else{
      alert("Login Unsuccessfull");
    }
  }
}