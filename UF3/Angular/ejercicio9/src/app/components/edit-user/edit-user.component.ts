import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/User';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {
//propietats de la classe. Només deixarem canviar nom, correu electrònic, sexe, estat civil
editformulari!: FormGroup;
sex!: string[];
status!: string[];
editedUser!: User;

@Input() valor:User=new User();; //atributo especial que recogerà un valor del padre

@Output() userModified= new EventEmitter<User>();//atribut especial per enviar al pare

constructor(private usuarioService:UsuariosService){}

ngOnInit() {

  this.editformulari = new FormGroup({
    nomUsuari: new FormControl(this.valor.nomUsuari,Validators.required),
    correuElectronic: new FormControl(this.valor.correuElectronic, [Validators.required]),
    estatCivil: new FormControl(this.valor.estatCivil, [Validators.required]),
    sexe: new FormControl(this.valor.sexe, [Validators.required]),

  });

  this.sex = ['Home', 'Dona', 'Altres'];
  this.status = ['Casat/da', 'Solter/a', 'Divorciat/da'];


  this.editedUser = new User();

}

enviament(): void {
//un cop puc fer clic al boto Modifica Usuari, creo de nou l'usuari amb els valors nous (canviats) i vells (no canviats)
  this.editedUser = new User(
    this.editformulari.value.nomUsuari,
    this.valor.contrasenya,
    this.editformulari.value.correuElectronic,
    this.editformulari.value.estatCivil,
    this.editformulari.value.sexe,
    this.valor.informacio,
    this.valor.condicions
  );
  //enviem l'usuari al pare per actualitzar l'usuari
  this.userModified.emit(this.editedUser);


}


}
