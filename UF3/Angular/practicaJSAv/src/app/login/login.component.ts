import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from 'src/app/modelLogin/User';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // atributos de la clase
  login: FormGroup;
  newUser: User;
  mensaje: string;

  constructor(private UserService: UserService) {
    this.login = new FormGroup({
      nomUsuari: new FormControl('', [
        Validators.required,
        // Validators.pattern('^[a-zA-Z0-9 ]{6,}$'),
      ]),
      contrasenya: new FormControl('', [
        Validators.required,
        // Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{4,}$/),
      ]),
    });

    this.newUser = new User('', '');
    this.mensaje = '';
  }

  enviament(): void {
    this.newUser = new User(
      this.login.value.nomUsuari,
      this.login.value.contrasenya,
    );

    //si el usuario es correcto me muestra el mensaje de confirmacion, y si esta mal me imprime un mensaje de
    if (this.UserService.validateUsers(this.newUser)) {
      this.mensaje = 'Usuario validado correctamente.';

      localStorage.setItem('Login', this.login.value.nomUsuari);

    } else {
      this.mensaje = 'Error: Usuario no encontrado.';
    }
  }
}
