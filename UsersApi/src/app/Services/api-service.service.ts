import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http:HttpClient) {}

  getUsers(){
    return this._http.get("https://reqres.in/api/users?page=2")
  }
}
