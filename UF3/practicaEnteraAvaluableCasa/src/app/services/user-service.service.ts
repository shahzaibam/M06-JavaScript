import {Injectable, OnInit} from '@angular/core';
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements OnInit{

  allUsers:any = [];
  user!:User;
  name:string = "user";
  contrasenya:string = "password";

  constructor() { }

  ngOnInit(): void {

  }


  showUsuarios() {

    for (let i = 0; i<=10; i++) {
      this.name = this.name+i;
      this.contrasenya = this.contrasenya+i;
      this.user = new User(this.name, this.contrasenya);

      this.allUsers.push(this.user);

    }

    return this.allUsers;
  }

}
