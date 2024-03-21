import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {HttpService} from "../../services/http.service";


@Component({
  selector: 'app-identificar',
  templateUrl: './identificar.component.html',
  styleUrls: ['./identificar.component.css']
})
export class IdentificarComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';
  isFormValid = false;
  logFalso = false;

  constructor(private fb: FormBuilder, private myHttpService: HttpService , private router: Router) {}

  ngOnInit(): void {
    // Inicializar el loginFormo reactivo
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      userpass: ['', [Validators.required, Validators.minLength(9)]]
    });

    // Escuchar los cambios en el loginFormo para habilitar/deshabilitar los botones
    this.loginForm.valueChanges.subscribe(() => {
      this.validateForm();
    });
  }

  validateForm() {
    // Habilitar/deshabilitar los botones basados en la validez del loginFormo
    this.isFormValid = this.loginForm.valid;
  }

  checkLogin(): void {
    if (this.loginForm.valid) {
      const loginData = {
        username: this.loginForm.get('username')?.value,
        userpass: this.loginForm.get('userpass')?.value
      };

      this.myHttpService.validateLogin(loginData).subscribe(
        response => {
          if (!response.error) {
            console.log('Login exitoso:', response.data); // 'data' es donde está mi token
            localStorage.setItem('logged', response.data); // Almacenar el token en localStorage
            this.router.navigate(['/quisom']);
          } else {
            console.error('Login failed:', response.data);
            this.logFalso = true;
          }
        },
        error => {
          console.error('Error al hacer login:', error);
          this.logFalso = true;
        }
      );

    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
