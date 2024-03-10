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
    return this._http.get<any>(`${this.url}/eventsAll`).pipe(
      map(res => {

        if(res.events) {
          return res;
        }
      })
    );
  }


  getTournaments() {
    return this._http.get<any>(`${this.url}/tournamentsAll`).pipe(
      map(res => {

        if(res) {
          return res;
        }
      })
    );
  }




  getSingleUserEvents(): Observable<any> {
    const token = localStorage.getItem('myToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this._http.get<any>(`${this.url}/my-events`, { headers });
  }


  getSingleUserTournaments(): Observable<any> {
    const token = localStorage.getItem('myToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this._http.get<any>(`${this.url}/my-tournaments`, { headers });
  }


  createEvent(eventData: any): Observable<any> {
    const token = localStorage.getItem('myToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this._http.post<any>(`${this.url}/events`, eventData, { headers });
  }


  createTournament(tournamentData: any): Observable<any> {
    const token = localStorage.getItem('myToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this._http.post<any>(`${this.url}/tournaments`, tournamentData, { headers });
  }


  updateEvent(eventId: number, eventData: any): Observable<any> {
    const token = localStorage.getItem('myToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this._http.put<any>(`${this.url}/events/${eventId}`, eventData, { headers });
  }


  updateTournament(tournamentId: number, tournamentData: any): Observable<any> {
    const token = localStorage.getItem('myToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this._http.put<any>(`${this.url}/tournaments/${tournamentId}`, tournamentData, { headers });
  }


  deleteEvent(eventId:any): Observable<any> {
    const token = localStorage.getItem('myToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this._http.delete<any>(`${this.url}/events/${eventId}`, { headers });
  }


  deleteTournament(tournamentId:any): Observable<any> {
    const token = localStorage.getItem('myToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this._http.delete<any>(`${this.url}/tournaments/${tournamentId}`, { headers });
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


  getUserType(): Observable<string> {
    const token = localStorage.getItem('myToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this._http.get<any>(`${this.url}/userType`, { headers }).pipe(
      map(res => {
        // Supongamos que tu API de Laravel devuelve el tipo de usuario como un string
        return res.userType;
      })
    );
  }
}
