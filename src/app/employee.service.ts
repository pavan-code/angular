import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee} from '../employee';
import { Observable,pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
// import  { _throw } from 'rxjs/observable/throw'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/employee.json";

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
    .pipe(catchError(this.errorHandler));

  }
  errorHandler(error: HttpErrorResponse) {
return Observable.throw(error.message || "Server Error !!")
  }

}
