import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = 'http://localhost:8000/api'; // Cambia esto a la URL base de tu API de Laravel
  private usuarioSubject: BehaviorSubject<any>;
  public usuario: Observable<any>;

  constructor(private _http: HttpClient) {
    this.usuarioSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('myToken') || '{}'));
    this.usuario = this.usuarioSubject.asObservable();
  }

  public get usuarioData(): any {
    return this.usuarioSubject.value;
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
