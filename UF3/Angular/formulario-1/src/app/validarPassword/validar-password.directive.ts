import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[appValidarPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidarPasswordDirective, multi: true }]
})


export class ValidarPasswordDirective implements Validator {
  @Input('appValidarPassword') contrasenyaValidarName!: string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const contrasenya = control.value;
    const contrasenyaValidar = control.root.get(this.contrasenyaValidarName);

      if (contrasenya.toLowerCase() !== contrasenyaValidar!.value.toLowerCase()) {
        return { custom: true };
      }

    return null;
  }
}
