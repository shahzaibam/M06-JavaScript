import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from "../../services/auth-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-identificar',
  templateUrl: './identificar.component.html',
  styleUrls: ['./identificar.component.css']
})
export class IdentificarComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';
  isFormValid = false;

  constructor(private fb: FormBuilder, private authService: AuthServiceService, private router: Router) {}

  ngOnInit(): void {
    // Inicializar el formulario reactivo
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(9)]]
    });

    // Escuchar los cambios en el formulario para habilitar/deshabilitar los botones
    this.loginForm.valueChanges.subscribe(() => {
      this.validateForm();
    });
  }

  validateForm() {
    // Habilitar/deshabilitar los botones basados en la validez del formulario
    this.isFormValid = this.loginForm.valid;
  }

  onSubmit() {
    // Lógica para validar y guardar en localStorage
    if (this.isFormValid) {
      if (this.authService.validateCredentials(this.loginForm.value.username, this.loginForm.value.password)) {
        // Guardar en localStorage
        localStorage.setItem('user', this.loginForm.value.username);

        this.router.navigate(['/quisom']);

      } else {
        this.errorMessage = 'Credenciales incorrectas';
      }
    }

  }

  goBack() {
    this.router.navigate(['/']);
  }
}
