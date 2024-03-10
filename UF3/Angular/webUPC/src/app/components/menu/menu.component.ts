import { Component, OnDestroy, NgZone } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Subscription } from 'rxjs';
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  hasToken: boolean = false;
  userName: string = '';
  private authSubscription!: Subscription;
  userType!: string;

  constructor(public authService: AuthService, private http: HttpService,private ngZone: NgZone) {
    this.hasToken = !!localStorage.getItem('myToken'); // Comprobar si el token está presente
    this.userName = localStorage.getItem('name') || ''; // Obtener el nombre de usuario

    // Se suscribe a los cambios en el estado de autenticación, detecta si tiene nombre y token
    this.authSubscription = this.authService.isAuthenticated.subscribe(
      (isAuthenticated: boolean) => {
        this.ngZone.run(() => {
          this.hasToken = isAuthenticated;
          this.userName = isAuthenticated ? localStorage.getItem('name') || '' : '';
        });
      }
    );
  }

  ngOnInit(): void {

    if(this.hasToken) {
      this.http.getUserType().subscribe((type: string) => {
        this.userType = type;
      });
    }

  }

}
