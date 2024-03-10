import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appDniValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DniValidatorDirective, multi: true }]
})
export class DniValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const dni = control.value;
    if (!dni) return null; // si está vacío, devuelve null

    const dniRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    if (!dniRegex.test(dni)) return { 'invalidDni': true };

    const letters = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const letter = letters.charAt(parseInt(dni, 10) % 23);
    if (letter !== dni.charAt(8).toUpperCase()) return { 'invalidDniLetter': true };

    return null; // si todo es correcto, devuelve null
  }
}
