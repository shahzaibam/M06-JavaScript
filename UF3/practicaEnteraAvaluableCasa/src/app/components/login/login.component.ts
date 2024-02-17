import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usersArrived:any = [];
  everyUser:any = {};

  formulari: FormGroup;

  nombreForm!:string;
  passForm!:string;

  logFalso:boolean = false;

  constructor(private users:UserServiceService, private cookie:CookieService, private route:Router) {
    this.formulari = new FormGroup({
      nomUsuari: new FormControl('', [
        Validators.required,
      ]),
      contrasenya: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.mostrarUsuarios();
  }

  mostrarUsuarios():void {
    this.usersArrived = this.users.showUsuarios();

    let i = 1;

    this.usersArrived.forEach((item:any) => {
      this.nombreForm = item.nomUsuari;
      this.passForm = item.contrasenya;


      if(!this.everyUser[i]) {
        this.everyUser[i] = {};
      }

      this.everyUser[i].username = this.nombreForm;
      this.everyUser[i].password = this.passForm;

      i++;
    })
  }


  checkLogin(): void {


    for(let i=1; i<=Object.keys(this.everyUser).length; i++) {

      if(this.formulari.value.nomUsuari == this.everyUser[i].username && this.formulari.value.contrasenya == this.everyUser[i].password) {
        this.logFalso = false;

        this.cookie.set("loggedIn", 'true');


        this.route.navigate(['/equip']); // Redirect to equip page


        break;

      }else {
        this.logFalso = true;
      }

    }
  }



}
