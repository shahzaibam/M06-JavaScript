import { Directive } from '@angular/core';
import {AbstractControl, ValidationErrors} from "@angular/forms";

@Directive({
  selector: '[appDniValidator]'
})
export class DniValidatorDirective {


  constructor() { }


  validate(control: AbstractControl): ValidationErrors | null {
    const dni = control.value;
    if (!dni) {
      return null; // Si el campo está vacío, no se realiza la validación
    }

    const dniRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    if (!dniRegex.test(dni)) {
      return { 'invalidDni': true };
    }

    // Validación de letra
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const letter = letters.charAt(parseInt(dni, 10) % 23);
    if (letter !== dni.charAt(8).toUpperCase()) {
      return { 'invalidDniLetter': true };
    }

    return null;
  }
}
