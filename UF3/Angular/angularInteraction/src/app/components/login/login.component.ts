import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  @Input() username:string = "";
  @Input() password:string = "";

  usernameInput:string = "";
  passwordInput:string = "";

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.username);
    console.log(this.password);
  }

  onSubmit() {
    if(this.usernameInput === this.username && this.passwordInput === this.password) {
      alert("te has logeado correctamente");
    }else {
      alert("mal")
    }
  }

}
