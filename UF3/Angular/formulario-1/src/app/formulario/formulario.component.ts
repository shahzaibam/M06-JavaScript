import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from "../model/User.model";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit{

  //propietats de la clase
  formulari!: FormGroup;
  sex:string[];
  status:string[];
  info:string[];
  newUser?: UserModel;

  constructor(private readonly fb: FormBuilder) {
    this.sex = ["Home", "Dona", "Altres"];
    this.status = ["Casat/da", "Solter/a", "Divorciat/da"];
    this.info = ["Videojocs", "Accessoris", "Novetats del mercat"];
  }

  ngOnInit(): void {
    this.formulari = this.initForm();
  }

  onSubmit(): void {
    console.log(this.formulari.value);


    if(this.formulari.valid) {
      this.newUser = new UserModel(
        this.formulari.value.nomUsuari,
        this.formulari.value.contrasenya,
        this.formulari.value.correuElectronic,
        this.formulari.value.estatCivil,
        this.formulari.value.sexe,
        this.formulari.value.informacio,
        this.formulari.value.acceptarCondicions,
        this.formulari.value.edad
      );

      console.log(this.newUser);
    }

  }


  initForm(): FormGroup {
    return this.fb.group({
      nomUsuari: ['', [Validators.required]],
      contrasenya: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/)]],
      confirmarContrasenya: ['', [Validators.required]],
      correuElectronic: ['', [Validators.required]],
      estatCivil: ['', [Validators.required]],
      sexe: ['', [Validators.required]],
      informacio: ['', [Validators.required]],
      acceptarCondicions: ['', [Validators.required]],
      edad: ['', [Validators.required]]
    });
  }
}
