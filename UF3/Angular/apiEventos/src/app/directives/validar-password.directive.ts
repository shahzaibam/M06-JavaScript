import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";


@Directive({
  selector: '[appValidarPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidarPasswordDirective, multi: true }]

})
export class ValidarPasswordDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const patron = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; //patron password

    //quan cometis l'error de no passar el patró...
    if (!patron.test(control.value)) {
      return { custom: true }; //envio un flag que diu error
    }

    return null;//arribo si passem el patró
  }

}
