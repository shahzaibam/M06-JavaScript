import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../model/User/User";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private users: User[] = [
    new User('usuario1@example.com', '26614605V'),
    new User('usuario2@example.com', '26614605L'),
    new User('usuario3@example.com', '26614605M'),
    new User('usuario4@example.com', '26614605N'),
    new User('usuario5@example.com', '26614605O'),
    new User('usuario6@example.com', '26614605P'),
    new User('usuario7@example.com', '26614605Q'),
    new User('usuario8@example.com', '26614605R'),
    new User('usuario9@example.com', '26614605S'),
    new User('usuario10@example.com', '26614605T'),
  ];

  constructor() { }

  validateCredentials(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    return !!user; // Devuelve true si se encontró el usuario, false en caso contrario
  }

}
