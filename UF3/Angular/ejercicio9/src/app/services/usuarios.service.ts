import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  usuarios: User[] = [];

  constructor() {
    this.initUsuarios();
  }
   private initUsuarios(): void {

     let sex = ['Home', 'Dona', 'Altres'];
     let status = ['Casat/da', 'Solter/a', 'Divorciat/da'];
     let info = ['Videojocs', 'Accessoris', 'Novetats del mercat'];
    for (let i = 0; i < 10; i++) {
      let j = Math.floor(Math.random() * 3);
      this.usuarios.push(new User('usuario' + i, 'con' + i,'usuario'+i+'@gmail.com', status[j],sex[j], info[j], true));
    }
   // console.log(this.usuarios);
  }

  validateUsers(user: User): boolean {
    return this.usuarios.some(
      (u) =>
        u.nomUsuari === user.nomUsuari && u.contrasenya === user.contrasenya
    );
  }

  getUsers():User[]{
    return this.usuarios;
  }
  changeUser(user:User): void{

  }
}
