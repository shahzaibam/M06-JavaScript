import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from "../model/User.model";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  registerForm!: FormGroup;
  newUser?: UserModel;
  mostrarMensaje: boolean = false;

  constructor(private readonly fb: FormBuilder) {}

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

    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      nomUsuari: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,8}$/)]],
      correuElectronic: ['', [Validators.required, Validators.email]],
      repetirCorreuElectronic: ['', [Validators.required, Validators.email]],
      edat: ['', [Validators.required, this.ageValidator]],
      tAgradaJoc: ['', [Validators.required]],
    });
  }


  ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const age = control.value;

    return age >= 18 ? null : { 'underAge': true };
  }


  emailsMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const email = group.get('correuElectronic')?.value;
    const repeatEmail = group.get('repetirCorreuElectronic')?.value;

    return email === repeatEmail ? null : { 'emailsNotMatch': true };
  }
}
