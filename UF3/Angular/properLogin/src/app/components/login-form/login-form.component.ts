import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../userservice/users.service";
import { Router } from '@angular/router';
import {AuthService} from "../../authservice/auth.service";
import {SharedDataService} from "../../sharedData/shared-data.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  username:string = "";
  password:string = "";

  isLoggedIn!:boolean;

  constructor(private authService: AuthService, private router: Router, private sharedService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedService.recibirMensaje().subscribe((mensaje) => {
      if (mensaje === "logout") {
        this.logout();
      }
    })
  }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Si la autenticación es exitosa, redirige al usuario al componente home
      this.router.navigate(['/home']); // Cambia '/home' por la ruta deseada
    } else {
      // Si la autenticación falla, puedes mostrar un mensaje de error o tomar otra acción.
    }
  }

  logout(): void {
    alert("logout")


    this.authService.logout();
    this.router.navigate(['/login']); // Redirigir al login
  }




}
