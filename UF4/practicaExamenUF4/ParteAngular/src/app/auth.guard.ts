import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = localStorage.getItem('myToken');  // Aquí asumimos que guardas el token de sesión en localStorage
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['']);  // Redirigir al usuario a la página de login si no está logueado
      return false;
    }
  }
}
