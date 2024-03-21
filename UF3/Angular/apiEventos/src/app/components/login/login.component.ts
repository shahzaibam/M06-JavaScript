import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // atributos de la clase
  login: FormGroup;
  newUser: User;
  mensaje: string;

  constructor(private router: Router) {
    this.login = new FormGroup({
      nomUsuari: new FormControl('', [
        Validators.required,
        // Validators.pattern('^[a-zA-Z0-9 ]{6,}$'),
      ]),
      contrasenya: new FormControl('', [
        Validators.required,
        // Validators.pattern('/^\d{8}[a-zA-Z]$/'),
      ]),
    });

    // Creamos el usuario vacio
    this.newUser = new User('', '');

    // Ponemos el mensaje en blanco
    this.mensaje = '';
  }

  enviament(): void {
    // // Creamos un usuario con los valores que nos a puesto el usuario
    // this.newUser = new User(
    //   this.login.value.nomUsuari,
    //   this.login.value.contrasenya,
    // );

    // if (this.AuthService.validateUsers(this.newUser)) {
    //   // si en validateUsers a salido true significa que nos hemos logeado correctamente i ponemos el mensaje de que nos hemos logeado
    //   this.mensaje = 'Usuario validado correctamente.';

    //   // creamos la variable de la localStorage
    //   localStorage.setItem('user', this.login.value.nomUsuari);

    //   // rediriguimos a la aplicacion
    //   window.location.href="http://localhost:4200";
    // } else {
    //   // si a salido false es que no nos hemos logeado correctamente i ponemos el mensaje de que a habido un error
    //   this.mensaje = 'Credencials incorrectes';
    // }
  }

  Enrere() {
    this.router.navigate(['/home']);
  }
}
