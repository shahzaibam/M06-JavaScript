import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[mayorEdad]', //selector que hace de artibuto, se coloca en el html
  providers: [{provide: NG_VALIDATORS, useExisting: MayorEdadDirectiveDirective, multi: true}]
})
export class MayorEdadDirectiveDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors|null {
    let validar: boolean = false;

    if (control.value >= 18) {
      validar = true;
    }

    return validar ? null : { 'custom': true };
  }
}
