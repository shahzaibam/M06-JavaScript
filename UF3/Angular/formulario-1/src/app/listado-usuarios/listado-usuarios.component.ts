import {Component, OnInit} from '@angular/core';
import {UserServeisService} from "../serveis/user-serveis.service";
import {UserModel} from "../model/User.model";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit{

  allUsers: UserModel[] = []; // Afegit una nova propietat per emmagatzemar tots els usuaris

  constructor( private userService: UserServeisService) {

    // Genera usuaris aleatoris quan es crea el component
    userService.generateRandomUsers();

    // Obtenir tots els usuaris
    this.allUsers = userService.getAllUsers();


  }

  ngOnInit(): void {
    console.log('Todos los usuarios:', this.allUsers);
  }

}
