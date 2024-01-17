import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from "../model/User.model";
import {UserServeisService} from "../serveis/user-serveis.service";

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
  allUsers: UserModel[] = []; // Afegit una nova propietat per emmagatzemar tots els usuaris

  constructor(private readonly fb: FormBuilder, private userService: UserServeisService) {
    this.sex = ["Home", "Dona", "Altres"];
    this.status = ["Casat/da", "Solter/a", "Divorciat/da"];
    this.info = ["Videojocs", "Accessoris", "Novetats del mercat"];

    // Genera usuaris aleatoris quan es crea el component
    userService.generateRandomUsers();

    // Obtenir tots els usuaris
    this.allUsers = userService.getAllUsers();


  }

  ngOnInit(): void {
    this.formulari = this.initForm();
    console.log('Todos los usuarios:', this.allUsers);
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

      // Ara pots fer servir el servei per validar l'usuari
      const isValid = this.userService.validateUser({
        nomUsuari: this.newUser.nomUsuari,
        contrasenya: this.newUser.contrasenya,
      });



      if(isValid) {
        alert("Te has logueado correctamente !!");
      }else {
        alert("No estás registrado, Usuario incorrecto !!!")
      }



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
