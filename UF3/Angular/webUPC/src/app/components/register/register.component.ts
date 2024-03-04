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
            this.router.navigate(['/']);
          } else {
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
