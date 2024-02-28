import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


//https://www.positronx.io/laravel-angular-role-based-authentication-with-jwt/


@Injectable()

export class JwtInterceptor implements HttpInterceptor {

  constructor(private router:Router ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("estic a interceptor");
    const token: any = localStorage.getItem('myToken');
    console.log(token);
    if (!token) {
      return next.handle(request);
   }
   const headers = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
   });
   return next.handle(headers);



  }
}
