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

  register(token: string): void {
    localStorage.setItem('myToken', token);
    this.isAuthenticatedSubject.next(true);
  }

  login(token: string): void {
    localStorage.setItem('myToken', token);
    this.isAuthenticatedSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem('myToken');
    this.isAuthenticatedSubject.next(false);
  }
}
