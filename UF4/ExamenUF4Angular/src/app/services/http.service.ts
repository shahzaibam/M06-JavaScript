import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = 'http://localhost:3000';
  private usuariSubject: BehaviorSubject<any>;
  public usuario: Observable<any>;

  constructor(private _http: HttpClient) {
    this.usuariSubject = new BehaviorSubject<any>(localStorage.getItem('logged'));
    this.usuario = this.usuariSubject.asObservable();
  }

  public usuariData(): any {
    return this.usuariSubject.value;
  }

  getUsers(): Observable<any> {
    return this._http.get(`${this.url}/allUsers`);
  }


// En tu servicio HTTP:
  validateRegister(registerData: any): Observable<any> {
    return this._http.post<any>(`${this.url}/register`, {
      "username": registerData.username,
      "userpass": registerData.userpass,
      "role": registerData.role
    }, { responseType: 'json' }).pipe(
      map(res => {
        if (!res.error && res.data) { // Asegurándose de que no hay error y que data contiene algo
          localStorage.setItem('logged', res.data); // Guardando el token en localStorage
          this.usuariSubject.next(res.data); // Esto actualiza el observable del usuario
        }

        return res;
      })
    );
  }



  validateLogin(loginData: any): Observable<any> {

    console.log(loginData.username);
    console.log(loginData.userpass);

    return this._http.post<any>(`${this.url}/login`, {
      "username": loginData.email,
      "userpass": loginData.userpass
    }, { responseType: 'json' }).pipe(
      map(res => {
        if (!res.error) {
          localStorage.setItem('logged', res.data);
          this.usuariSubject.next(res.data);
        }
        return res;
      })
    );
  }


  logout(): void {
    localStorage.removeItem('myToken');
    this.usuariSubject.next(null);
  }
}
