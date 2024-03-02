import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulari: FormGroup;
  logFalso: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.formulari = new FormGroup({
      nomUsuari: new FormControl('', Validators.required),
      contrasenya: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  checkLogin(): void {

    const loginData = {
      name: this.formulari.get('nomUsuari')?.value,
      password: this.formulari.get('contrasenya')?.value
    };

    if (this.formulari.valid) {

      console.log(this.formulari.get('nomUsuari')?.value);
      console.log(this.formulari.get('contrasenya')?.value);

      this.http.post('http://localhost:3000/login', loginData).subscribe(
        (response: any) => {
          console.log(response);
          if (!response.error) {
            // Aquí manejas la lógica de éxito, por ejemplo, guardar el token y redirigir
            this.router.navigate(['/']);
          } else {
            // Maneja la lógica de error, por ejemplo, mostrar un mensaje de error
            this.logFalso = true;
          }
        },
        (error) => {
          console.error('Error al hacer login:', error);
          this.logFalso = true;
        }
      );
    }
  }

}
