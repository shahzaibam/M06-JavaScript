import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[appValidarEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidarEmailDirective, multi: true }]

})

export class ValidarEmailDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    // patron email
    const patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!patron.test(control.value)) {
      // en caso de error
      return { custom: true };
    }

    // cuando todo esta bien
    return null;
  }


}
