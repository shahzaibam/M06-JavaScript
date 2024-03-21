import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-suscripcio',
  templateUrl: './suscripcio.component.html',
  styleUrls: ['./suscripcio.component.css']
})
export class SuscripcioComponent {
  suscForm!: FormGroup;
  errorMessage: string = '';
  isFormValid = false;
  logFalso = false;

  constructor(private fb: FormBuilder, private myHttpService: HttpService, private router: Router) {}

  ngOnInit(): void {
    // Inicializar el formulario reactivo

    this.suscForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(9)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.checkPasswords });


    // Escuchar los cambios en el formulario para habilitar/deshabilitar los botones
    this.suscForm.valueChanges.subscribe(() => {
      this.validateForm();
    });
  }

  validateForm() {
    // Habilitar/deshabilitar los botones basados en la validez del formulario
    this.isFormValid = this.suscForm.valid;
  }

  checkRegister(): void {
    if (this.suscForm.valid) {
      const registerData = {
        username: this.suscForm.get('email')?.value,
        userpass: this.suscForm.get('confirmPassword')?.value,
        role: 'client' // Asegúramos de que esto coincide con lo que espera el backend
      };

      this.myHttpService.validateRegister(registerData).subscribe(
        response => {
          if (!response.error) {
            console.log('Registro exitoso:', response.data); // 'data' es donde está mi token
            localStorage.setItem('logged', response.data); // Almacenar el token en localStorage
            this.router.navigate(['/']);
          } else {
            console.error('Registro fallido:', response.data);
            this.errorMessage = response.data; // Mostrar mensaje de error
            this.logFalso = true;
          }
        },
        error => {
          console.error('Error al registrar:', error);
          this.logFalso = true;
        }
      );
    }
  }



  checkPasswords(group: FormGroup): { [key: string]: any } | null {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { passwordMismatch: true };
  }


  goBack() {
    this.router.navigate(['/']);
  }
}
