import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulari: FormGroup;
  logFalso: boolean = false;


  constructor(private myHttpService:HttpService ,private router: Router) {

    this.formulari = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }


  checkLogin(): void {
    if (this.formulari.valid) {
      const loginData = {
        email: this.formulari.get('email')?.value,
        password: this.formulari.get('password')?.value
      };

      this.myHttpService.validateLogin(loginData).subscribe(
        response => {
          if (!response.error) {
            this.router.navigate(['/todo']);
          } else {
            console.error('Login failed:', response.data);
            this.logFalso = true;
          }
        },
        error => {
          console.error('Error al hacer login:', error);
          this.logFalso = true;
        }
      );

    }
  }


}
