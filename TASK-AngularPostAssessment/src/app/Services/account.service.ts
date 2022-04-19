import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BooksTable } from 'src/app/Models/books.model'
import { AccountsModel } from '../Models/accounts.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl="http://localhost:3000/Accounts";
  constructor(private http: HttpClient) { }

  public login():Observable<AccountsModel>{

    return this.http.get<AccountsModel>(this.baseUrl);
  }
}
