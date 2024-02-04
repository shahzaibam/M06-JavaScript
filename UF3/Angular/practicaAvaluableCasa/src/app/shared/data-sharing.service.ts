import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private mensaje = new Subject<string>();

  constructor() { }

  enviarMensaje(message: any) {
    this.mensaje.next(message);
  }

  recibirMensaje() {
    return this.mensaje.asObservable();
  }
}
