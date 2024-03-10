import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formulari: FormGroup;
  logFalso: boolean = false;

  constructor(private myHttpService: HttpService, private router: Router, private authService: AuthService) {
    this.formulari = new FormGroup({
      nomUsuari: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      userType: new FormControl('', [Validators.required]),
      dni: new FormControl('', Validators.required),
      contrasenya: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  checkRegister(): void {
    if (this.formulari.valid) {
      const userType = this.formulari.get('userType')?.value; // Obtén el valor seleccionado del formulario
      console.log('Valor de userType:', userType); // Depurar el valor de userType

      const registerData = {
        name: this.formulari.get('nomUsuari')?.value,
        email: this.formulari.get('email')?.value,
        userType: userType, // Asigna el tipo de usuario seleccionado
        dni: this.formulari.get('dni')?.value,
        password: this.formulari.get('contrasenya')?.value,
      };

      console.log('Datos del formulario:', registerData); // Depurar los datos del formulario

      this.myHttpService.validateRegister(registerData).subscribe(
        response => {
          if (response.token) {
            this.authService.register(response); // Utiliza el token de la respuesta
            this.router.navigate(['/']); // Redirige al usuario donde corresponda
          } else {
            // Maneja la respuesta sin éxito
            console.error('Registration failed:', response.message);
            this.logFalso = true;
          }
        },
        error => {
          console.error('Error durante el registro:', error);
          this.logFalso = true;
        }
      );
    }
  }
}
