import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  url: string = 'http://localhost:3000';
  private usuariSubject: BehaviorSubject<any>;
  public usuario: Observable<any>; // Parte pública del BehaviorSubject

  constructor(private _http: HttpClient) {
    this.usuariSubject = new BehaviorSubject<any>(localStorage.getItem('myToken')); // Estado inicial del BehaviorSubject
    this.usuario = this.usuariSubject.asObservable(); // Parte pública del BehaviorSubject que se actualiza
  }

  insert(nombre: string, descripcion: string, fecha: string, hora: string, creado_por: string): Observable<any> {
    return this._http.post<any>(`${this.url}/events/add`, { nombre, descripcion, fecha, hora, creado_por }, { responseType: 'json' }).pipe(
      map(res => {
        console.log("Respuesta del servidor:", JSON.stringify(res));
        return res;
      })
    );
  }

  update(id: string, event: any): Observable<any> {
    return this._http.put<any>(`${this.url}/events/${id}`, event, { responseType: 'json' }).pipe(
      map(res => {
        console.log("Respuesta del servidor al actualizar:", JSON.stringify(res));
        return res;
      })
    );
  }

  delete(id: string): Observable<any> {
    return this._http.delete<any>(`${this.url}/events/${id}`, { responseType: 'json' }).pipe(
      map(res => {
        console.log("Respuesta del servidor al eliminar:", JSON.stringify(res));
        return res;
      })
    );
  }

  getEvents(): Observable<any> {
    return this._http.get(`${this.url}/events`);
  }

  logout(): void {
    localStorage.removeItem('myToken');
    this.usuariSubject.next(null);
  }
}
