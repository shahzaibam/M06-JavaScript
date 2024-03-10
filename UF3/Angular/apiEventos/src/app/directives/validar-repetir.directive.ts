import { Directive, Input } from '@angular/core';

//afegir nosaltres:
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[appValidarRepetir]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidarRepetirDirective, multi: true }]
})
export class ValidarRepetirDirective implements Validator {

  //recoge el valor que viene desde el formulario
  @Input('appValidarRepetir') password1!: string;

  constructor() {
    //this.password1="";
  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    //el valor del control repetir contrasenya
    console.log(control.value);

    let repetirPassword = control.value;

    //valor pasado en "vivo en directo"
    let passwordInicial = control.root.get(this.password1);

    //camp de contrasenya. És un objcte
    console.log(passwordInicial);


    //quan cometis l'error de no passar el patró...
    if (passwordInicial != null && repetirPassword != passwordInicial.value) {
      //envio un flag que diu error
      return { custom: true };
    }

    //arribo si passem el patró
    return null;
  }

}
