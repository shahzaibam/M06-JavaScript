import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formulari: FormGroup;
  logFalso: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.formulari = new FormGroup({
      nomUsuari: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      contrasenya: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  checkRegister(): void {

    const registerData = {
      name: this.formulari.get('nomUsuari')?.value,
      email: this.formulari.get('email')?.value,
      dni: this.formulari.get('dni')?.value,
      password: this.formulari.get('contrasenya')?.value,
    };

    if (this.formulari.valid) {

      console.log(this.formulari.get('nomUsuari')?.value);
      console.log(this.formulari.get('email')?.value);
      console.log(this.formulari.get('dni')?.value);
      console.log(this.formulari.get('contrasenya')?.value);

      this.http.post('http://localhost:3000/register', registerData).subscribe(
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
