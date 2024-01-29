import { Injectable } from '@angular/core';
import {UsersService} from "../userservice/users.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor(private userService: UsersService) {}

  login(username: string, password: string): boolean {
    // Buscar el usuario en el servicio de usuarios
    const user = this.userService.getUser(username);

    // Verificar si el usuario existe y la contraseña es correcta
    if (user && user.password === password) {
      // Autenticación exitosa
      this.isAuthenticated = true;
      return true;
    } else {
      // Autenticación fallida
      return false;
    }
  }


  logout(): void {
    this.isAuthenticated = false;
    // Aquí podrías limpiar cualquier estado relacionado con la sesión, como eliminar tokens JWT o cookies.
  }


  isLoggedIn(): boolean {
    console.log(this.isAuthenticated);
    return this.isAuthenticated;
  }

}
