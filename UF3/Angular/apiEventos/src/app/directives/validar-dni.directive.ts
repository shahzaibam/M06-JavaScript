import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";


@Directive({
  selector: '[appValidarDni]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidarDniDirective, multi: true }]

})
export class ValidarDniDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const patron = /^\d{8}[a-zA-Z]$/; //patron nombre

    //quan cometis l'error de no passar el patró...
    if (!patron.test(control.value)) {
      return { custom: true }; //envio un flag que diu error
    }

    return null;//arribo si passem el patró
  }

}

