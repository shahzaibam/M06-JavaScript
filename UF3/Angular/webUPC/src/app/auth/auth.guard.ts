import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAuthenticated = !!localStorage.getItem('myToken'); // Check if token exists in local storage

    if (isAuthenticated) {
      return true;
    } else {
      // Not authenticated, redirect to the login page.
      this.router.navigate(['/login']);
      return false;
    }
  }
}
