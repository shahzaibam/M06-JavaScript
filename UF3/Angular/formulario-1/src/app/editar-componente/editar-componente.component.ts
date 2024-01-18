import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../model/User.model";

@Component({
  selector: 'app-editar-componente',
  templateUrl: './editar-componente.component.html',
  styleUrls: ['./editar-componente.component.css']
})
export class EditarComponenteComponent implements OnInit{

  estaEditando = false;
  nuevoContenido!: string;
  nuevoNombre!: string;
  nuevaContrasenya!: string;
  @Input() user!: UserModel;



  ngOnInit(): void {
  }

  iniciarEdicion() {
    console.log(this.user);
    this.estaEditando = true;
    this.nuevoNombre = this.user?.nomUsuari;
    this.nuevaContrasenya = this.user?.contrasenya;
  }

  guardarEdicion(user: UserModel) {
    this.estaEditando = false;

    user.nomUsuari = this.nuevoNombre;
    user.contrasenya = this.nuevaContrasenya;


    console.log(this.user);
  }


}
