import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Message } from './message';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'https://gitlab-203909.web.app';

  constructor(private http: HttpClient) { }

  getMessage(): Observable<Message> {
    return this.http.get<Message>(this.apiURL + '/api1')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client side error
      errorMessage = error.error.message;
    } else {
      // Get server side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
