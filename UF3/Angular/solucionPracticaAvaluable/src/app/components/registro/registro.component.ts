import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  //propietats de la classe
  formulari: FormGroup;
  opciones: string[];
  newUser!: User;
  today: Date;
//constructor
  constructor() {
    this.formulari = new FormGroup({
      //validaciones
      nomUsuari: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]{6,}$')
      ]),
      confirmarCorreo: new FormControl('', [Validators.required,Validators.email]),
      correuElectronic: new FormControl('', [Validators.required]),
      opciones: new FormControl('', [Validators.required]),
      edad: new FormControl(),
      fechaNacimiento: new FormControl('', [Validators.required]),
    });

    this.opciones = ['Si', 'No', 'NS/NC'];
    this.today = new Date();
    this.newUser = new User('', '')
  }
/**
 * Función calcular edad
 */
  calcularEdad(): void {
      console.log(this.formulari.value.fechaNacimiento)
      let fecha = new Date(this.formulari.value.fechaNacimiento)
  }
/**
 * Envia los datos para crear un nuevo Usuario
 */
  enviament(): void {
    this.newUser = new User(
      this.formulari.value.nomUsuari,
      this.formulari.value.correuElectronic,
      this.formulari.value.fechaNacimiento,
      this.formulari.value.edad,
      this.formulari.value.opciones,
    );

    // console.log(this.newUser);
    // localStorage.setItem('firstName', 'Sara');
  }
}
