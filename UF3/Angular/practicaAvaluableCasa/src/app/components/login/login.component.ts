import { Component, OnInit } from '@angular/core';
import { DataSharingService } from "../../shared/data-sharing.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;

  usernameInput!: string;
  passwordInput!: string;

  loggedIn: boolean = false;

  constructor(private share: DataSharingService) {}

  ngOnInit(): void {
    // Suscribirse al observable en ngOnInit para obtener los valores actualizados de username y password
    this.share.recibirMensaje().subscribe((mensaje: any) => {
      this.username = mensaje.username;
      this.password = mensaje.password;

      this.handleCredentials();
    });
  }


  handleCredentials() {
    // Realizar la lógica que depende de this.username y this.password aquí
    console.log("Username fuera de recibirMensaje:", this.username);
  }

  checkCredentials() {
    // Verificar las credenciales dentro de la función checkCredentials después de que se hayan actualizado los valores
    if (this.usernameInput === this.username && this.passwordInput === this.password) {
      console.log("Credenciales coinciden.");
      this.loggedIn = true;
    } else {
      console.log("Credenciales no coinciden.");
      this.loggedIn = false;
    }
  }
}
