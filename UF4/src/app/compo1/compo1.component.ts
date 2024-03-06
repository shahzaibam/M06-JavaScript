import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import * as jwt_decode from 'jwt-decode';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Corrección aquí

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {

  message:string;
  public loginForm: FormGroup; // Corrección aquí

  constructor(private myHttpService: HttpService, private route: Router, private formBuilder: FormBuilder ) { // Corrección aquí
    this.message="";
    if(this.myHttpService.usuariData()){
      this.route.navigate(['/home']);
    }
    this.loginForm = this.formBuilder.group({ // Corrección aquí
      usuari: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      contrasenya: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  testLogin(): void {
    let usuari = this.loginForm.value.usuari;
    let contrasenya = this.loginForm.value.contrasenya;

    this.myHttpService.validateLogin(usuari, contrasenya).subscribe(
      result => {
        if(result.error) {
          this.message = "Credencials incorrectes";
          this.loginForm.reset();
        } else {
          console.log("Usuari correcte");
          this.route.navigate(['/home']);
        }
      }
    );
  }
}
