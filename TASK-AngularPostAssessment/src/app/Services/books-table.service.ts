import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { BooksTable } from '../Models/books.model';
import { RequestedBooks } from '../Models/requestedBooks.model';

@Injectable({
  providedIn: 'root'
})
export class BooksTableService {

  private _refresh = new Subject<void>();

  get refreshRequired(){
    return this._refresh;
  }
baseUrl ="http://localhost:7000/Books";
requestUrl = "http://localhost:8080/RequestedBook";
  constructor(private http: HttpClient ) { }

  public booksData():Observable<BooksTable[]>{
    return this.http.get<BooksTable[]>(this.baseUrl);
  }
  public addBooks(book :any):Observable<BooksTable>{
    return this.http.post<BooksTable>(this.baseUrl, book).pipe(
      tap(()=>{
        this.refreshRequired.next();
      })
    );
  }

  
  public getBookById(book:any):Observable<BooksTable>{
    const url = `${this.baseUrl}/${book}`
    return this.http.get<BooksTable>(url);
  }

  public editBook(book:any,id:number):Observable<BooksTable>{
    const url= `${this.baseUrl}/${id}`;
    debugger;
    return this.http.put<BooksTable>(url,book).pipe(
      tap(()=>{
        this.refreshRequired.next();
      })
    );
  }

  public deleteBook(id:number):Observable<RequestedBooks>{
    const url= `${this.baseUrl}/${id}`;
    return this.http.delete<RequestedBooks>(url).pipe(
      tap(()=>{
        this.refreshRequired.next();
      })
    );
  }

  //adding requested data into RequestBook Json file

  public addRequestedBooks(book :any):Observable<RequestedBooks>{
    return this.http.post<RequestedBooks>(this.requestUrl, book).pipe(
      tap(()=>{
        this.refreshRequired.next();
      })
    );
  }

  public getRequestedData():Observable<RequestedBooks[]>{
    return this.http.get<RequestedBooks[]>(this.requestUrl)
  }
}
