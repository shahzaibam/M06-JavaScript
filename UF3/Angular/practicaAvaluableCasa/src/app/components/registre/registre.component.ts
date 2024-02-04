import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from "../../model/User";
import {DataSharingService} from "../../shared/data-sharing.service";
import {share} from "rxjs";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  registerForm!: FormGroup;
  newUser?: UserModel;
  mostrarMensaje: boolean = false;
  sending!:object;

  constructor(private readonly fb: FormBuilder, private share: DataSharingService) {}

  ngOnInit(): void {
    this.registerForm = this.initForm();
  }

  onSubmit(): void {
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      this.newUser = new UserModel(
        this.registerForm.value.nomUsuari,
        this.registerForm.value.correuElectronic,
        this.registerForm.value.edat,
        this.registerForm.value.tAgradaJoc
      );

      console.log("new", this.newUser);
      this.mostrarMensaje = true;

      this.sending = {
        username: this.registerForm.value.nomUsuari,
        password: this.registerForm.value.correuElectronic
      }

      this.share.enviarMensaje(this.sending);

      console.log("enviando..." + this.registerForm.value.nomUsuari);
      console.log("enviando..." + this.registerForm.value.correuElectronic);
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      nomUsuari: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,8}$/)]],
      correuElectronic: ['', [Validators.required, Validators.email]],
      repetirCorreuElectronic: ['', [Validators.required, Validators.email]],
      data: ['', [Validators.required]],
      edat: ['', [Validators.required]],
      tAgradaJoc: ['', [Validators.required]],
    });
  }

  // Método para calcular la edad basada en la fecha de nacimiento
  calcularEdad(): void {
    const fechaNacimientoString: string = this.registerForm.value.data;
    const partesFecha: string[] = fechaNacimientoString.split('-');
    const fechaNacimiento: Date = new Date(parseInt(partesFecha[0]), parseInt(partesFecha[1]) - 1, parseInt(partesFecha[2]));
    const hoy: Date = new Date();
    const edad: number = hoy.getFullYear() - fechaNacimiento.getFullYear();

    // Ajustar la edad si el cumpleaños aún no ha ocurrido este año
    if (hoy < new Date(hoy.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate())) {
      this.registerForm.get('edat')?.setValue(edad - 1);
    } else {
      this.registerForm.get('edat')?.setValue(edad);
    }
  }
}
