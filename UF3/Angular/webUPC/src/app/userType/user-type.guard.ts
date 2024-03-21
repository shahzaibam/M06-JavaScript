import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserTypeGuard implements CanActivate {

  constructor(private http: HttpService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.http.getUserType().pipe(
      map(userType => {
        if (userType === 'empresa') {
          if (state.url !== '/dashboardEmpresa') {
            this.router.navigate(['/dashboardEmpresa']);
            return false;
          }
          return true;
        } else if (userType === 'autonomo') {
          if (state.url !== '/dashboardAutonomo') {
            this.router.navigate(['/dashboardAutonomo']);
            return false;
          }
          return true;
        }
        // Redirige al usuario a la página principal si no es 'empresa' ni 'autonomo' o si falta la autenticación
        this.router.navigate(['/']);
        return false;
      })
    );
  }
}
