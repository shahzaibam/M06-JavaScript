import {Injectable} from '@angular/core';
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
    this.usuariSubject = new BehaviorSubject<any>(localStorage.getItem('myToken'));
    this.usuario = this.usuariSubject.asObservable();
  }


  public usuariData(): any {
    return this.usuariSubject.value;
  }

  getUsers(): Observable<any> {
    return this._http.get(`${this.url}/allUsers`);
  }

  validateLogin(loginData: any): Observable<any> {

    console.log(loginData.email);
    console.log(loginData.password);

    return this._http.post<any>(`${this.url}/login`, {
      "email": loginData.email,
      "password": loginData.password
    }, {responseType: 'json'}).pipe(
      map(res => {
        if (!res.error) {
          localStorage.setItem('myToken', res.data);
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
