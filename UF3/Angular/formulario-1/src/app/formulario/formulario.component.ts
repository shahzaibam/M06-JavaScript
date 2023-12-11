
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup; //Declaración de una propiedad llamada formulario que representa el formulario reactivo.

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nomUsuari: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{6,}$/)]],
      contrasenya: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/)]],
      confirmarContrasenya: ['', [Validators.required]],
      correuElectronic: ['', [Validators.required, Validators.email]],
      estatCivil: ['', [Validators.required]],
      sexe: ['', [Validators.required]],
      informacio: this.fb.array([]),
      acceptarCondicions: [false, [Validators.requiredTrue]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('contrasenya');
    const confirmPasswordControl = formGroup.get('confirmarContrasenya');

    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;

      if (password !== confirmPassword) {
        confirmPasswordControl.setErrors({ noCoincide: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }


  getError(controlName: string, errorType: string): boolean {
    const control = this.formulario.get(controlName);
    return control ? control.touched && control.errors && control.errors[errorType] : false;
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      console.log('Formulario válido. Valores enviados:', this.formulario.value);
    } else {
      console.log('Formulario inválido. Por favor, revisa los campos.');
    }
  }

}
