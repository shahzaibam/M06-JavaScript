import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private mensaje = new BehaviorSubject<string>('');

  constructor() { }

  enviarMensaje(message: string) {
    this.mensaje.next(message);
  }

  recibirMensaje() {
    return this.mensaje.asObservable();
  }
}
