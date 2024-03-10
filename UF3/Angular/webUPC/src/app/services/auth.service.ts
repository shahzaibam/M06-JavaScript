// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor() {
    this.checkToken();
  }

  private checkToken(): void {
    const token = localStorage.getItem('myToken');
    this.isAuthenticatedSubject.next(!!token);
  }

  register(response: any): void {
    localStorage.setItem('myToken', response.token);
    localStorage.setItem('name', response.user.name);
    this.isAuthenticatedSubject.next(true);
  }

  login(response: any): void {
    localStorage.setItem('myToken', response.token);
    localStorage.setItem('name', response.user.name);
    this.isAuthenticatedSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem('myToken');
    localStorage.removeItem('name');
    this.isAuthenticatedSubject.next(false);
  }

}
