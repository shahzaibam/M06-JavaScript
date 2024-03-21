import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private router:Router ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("estic a interceptor");
    const token: any = localStorage.getItem('token');
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
