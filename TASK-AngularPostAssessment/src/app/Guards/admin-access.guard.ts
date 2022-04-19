import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from '../Components/login/login.component';
import { AccountService } from '../Services/account.service';
import { AuthService } from '../Services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AdminAccessGuard implements CanActivate {

  constructor( private authService :AuthService, private route: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
     if(this.authService){
       return true;
     }
     else{
       this.route.navigate(["login"]);
       return false;
     }
    
  }
  
}
