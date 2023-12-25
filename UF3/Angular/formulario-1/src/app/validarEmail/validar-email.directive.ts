import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[appValidarEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidarEmailDirective, multi: true }]

})
export class ValidarEmailDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //patrón email

    if (!patron.test(control.value)) {
      return { custom: true };
    }

    return null;
  }


}
