import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
//https://codingpotions.com/angular-seguridad
export class MyGuardGuard implements CanActivate {
  constructor(private route:Router, private _http: HttpService){

  }
  canActivate(route: ActivatedRouteSnapshot) {
    const usuario=this._http.usuariData();
    //console.log("erererer",usuario);
    if(usuario!=null){

      return true;
    }
      this.route.navigate(['/home']);
      return false;
  }

}
