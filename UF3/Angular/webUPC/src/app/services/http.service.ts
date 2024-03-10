import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = 'http://localhost:8000/api'; //URL DE LA API DE LARAVEL
  private usuarioSubject: BehaviorSubject<any>;
  public usuario: Observable<any>;

  constructor(private _http: HttpClient) {
    this.usuarioSubject = new BehaviorSubject<any>(localStorage.getItem('myToken') || '{}');
    this.usuario = this.usuarioSubject.asObservable();
  }


  getEvents() {
    const token = localStorage.getItem('myToken') || '';

    const headers = { 'Authorization': 'Bearer ' + token };

    return this._http.get<any>(`${this.url}/events`, { headers }).pipe(
      map(res => {

        if(res.events) {
          return res;
        }
      })
    );
  }


  // En tu HttpService
  getSingleUserEvents(): Observable<any> {
    const token = localStorage.getItem('myToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this._http.get<any>(`${this.url}/my-events`, { headers });
  }


  createEvent(eventData: any): Observable<any> {
    const token = localStorage.getItem('myToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this._http.post<any>(`${this.url}/events`, eventData, { headers });
  }


  validateRegister(registerData: any): Observable<any> {
    return this._http.post<any>(`${this.url}/register`, registerData, { responseType: 'json' }).pipe(
      map(res => {
        // Suponiendo que tu API de Laravel devuelve un token en el registro exitoso
        if (res.token) {
          localStorage.setItem('myToken', JSON.stringify(res.token));
          this.usuarioSubject.next(res.token);
        }
        return res;
      })
    );
  }

  validateLogin(loginData: any): Observable<any> {
    return this._http.post<any>(`${this.url}/login`, loginData, { responseType: 'json' }).pipe(
      map(res => {
        // Suponiendo que tu API de Laravel devuelve un token en el login exitoso
        if (res.token) {
          localStorage.setItem('myToken', JSON.stringify(res.token));
          this.usuarioSubject.next(res.token);
        }
        return res;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('myToken');
    this.usuarioSubject.next(null);
  }
}
