import { Injectable } from '@angular/core';
import { LoginComponent } from '../Components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private loginComponent : LoginComponent) { }

   isUserLoggedIn(){
    return localStorage.getItem("email")!=null;
  }
}
