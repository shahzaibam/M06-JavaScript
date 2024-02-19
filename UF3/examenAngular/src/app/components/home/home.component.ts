import {Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  mostrarDiv: boolean = true;

  existe!:any;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.comprobarCookie();
  }


  comprobarCookie() {
    this.existe = this.cookieService.get('hermes');

    if(this.existe) {
      this.mostrarDiv = false;
    }

  }

  aceptarCookie() {
    this.cookieService.set('hermes', 'si');
    this.mostrarDiv = false; // Ocultar el div al aceptar las cookies
  }

  rechazarCookie() {
    this.cookieService.delete('hermes');
    this.mostrarDiv = false; // Ocultar el div al rechazar las cookies
  }
}
