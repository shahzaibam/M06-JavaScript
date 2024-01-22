import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  login!:string | null;
  loggedTrue!:boolean;

  ngOnInit() {
    this.login = localStorage.getItem("Login");

    if(this.login) {
      this.loggedTrue = true;
    }else {
      this.loggedTrue = false;
    }

  }
}
