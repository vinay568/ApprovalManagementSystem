import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { MaterialModule } from '../material.module';
import { Material } from '../Models/Material.model';

@Injectable({
  providedIn: 'root'
})
export class MyDataServiceService {

public data : any;
  constructor(private _http: HttpClient) { }
  private handleErrors(errorresponse : HttpErrorResponse)
  {
    if(errorresponse.error instanceof ErrorEvent)
    {
      console.log("Wrong at client side");
    }
    else{
      console.log("Error at server side");
    }
    return throwError("Problem with code");
  
  }
  public getData():Observable<Material[]>{
    
    return this._http.get<Material[]>("http://localhost:3000/Material").pipe(catchError(this.handleErrors))
  }

  public addData(url : any):Observable<Material>{
    return this._http.post<Material>("http://localhost:3000/Material",url);
  }
}
