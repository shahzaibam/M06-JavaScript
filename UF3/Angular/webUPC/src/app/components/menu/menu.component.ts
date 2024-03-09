import { Component, NgZone } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  hasToken: boolean = false;

  constructor(private authService: AuthService, private ngZone: NgZone) {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated: boolean) => {
        this.ngZone.run(() => {
          this.hasToken = isAuthenticated; // Actualiza la variable dentro de la zona de Angular
        });
      }
    );
  }
}
