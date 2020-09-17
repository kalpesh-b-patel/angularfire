import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = req.clone();
    return next.handle(clone).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpResponse<any>): Observable<any> {
    console.log('Error Occured');
    return throwError(error);
  }

}
