import { Injectable } from '@angular/core';
import { User } from 'src/app/modelLogin/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usuarios: User[] = [
    (new User('User1','password1')),
    (new User('User2','password2')),
    (new User('User3','password3')),
    (new User('User4','password4')),
    (new User('User5','password5')),
    (new User('User6','password6')),
    (new User('User7','password7')),
    (new User('User8','password8')),
    (new User('User9','password9')),
    (new User('User10','password10')),

  ];

  // constructor() {
  //   this.initUsuarios();
  // }

  getUsuarios(): User[] {
    return this.usuarios;
  }

  // private initUsuarios(): void {
  //   for (let i = 0; i < 11; i++) {
  //     this.usuarios.push(new User('usuario' + i, 'con' + i));
  //   }
  // }

  validateUsers(user: User): boolean {
    return this.usuarios.some(
      (u) =>
        u.nomUsuari === user.nomUsuari && u.contrasenya === user.contrasenya
    );
  }

  AñadirUsuario(user: User): void {
    this.usuarios.push(new User(user.nomUsuari, user.contrasenya));
  }

  ModificarUsuario(userAeditar: User, userEdit: User): void {
    for (let index = 0; index < this.usuarios.length; index++) {
      if (this.usuarios[index].nomUsuari == userAeditar.nomUsuari && this.usuarios[index].contrasenya == userAeditar.contrasenya) {

        // Cambiamos el nombre de usuario i la contraseña por el que pongamos
        this.usuarios[index].nomUsuari = userEdit.nomUsuari;
        this.usuarios[index].contrasenya = userEdit.contrasenya;
      }
    }

  }

  DeleteUsuario(userDel: User): void {
    for (let index = 0; index < this.usuarios.length; index++) {
      if (this.usuarios[index].nomUsuari == userDel.nomUsuari && this.usuarios[index].contrasenya == userDel.contrasenya) {
        // Utiliza splice para eliminar el usuario del array
        this.usuarios.splice(index, 1);
      }
    }

  }
}
