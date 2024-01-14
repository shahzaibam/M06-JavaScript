import { Injectable } from '@angular/core';
import {UserModel} from "../model/User.model";

@Injectable({
  providedIn: 'root'
})
export class UserServeisService {
  private users: UserModel[] = [];

  constructor() {
    this.generateRandomUsers();
  }

  public generateRandomUsers(): void {
    for (let i = 1; i <= 300; i++) {
      const randomName = this.generateRandomName();
      const randomPassword = `Password${i}`;

      this.users.push({
        nomUsuari: `User${randomName}`,
        contrasenya: `Password${i}`,
        correuElectronic: `user${i}@example.com`,
        estatCivil: 'Solter/a',
        sexe: i % 2 === 0 ? 'Home' : 'Dona',
        informacio: 'Informació de l\'usuari...',
        condicions: true,
        edad: 20 + i,
      });
    }
  }

  private generateRandomName(): string {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nameLength = Math.floor(Math.random() * 2) + 1; // Longitud del nombre (máximo 10 caracteres)

    let randomName = '';
    for (let j = 0; j < nameLength; j++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      randomName += letters.charAt(randomIndex);
    }

    return randomName;
  }


  getAllUsers(): UserModel[] {
    return this.users;
  }

  validateUser(userToValidate: Partial<UserModel>): boolean {
    const foundUser = this.users.find(
      (user) =>
        user.nomUsuari === userToValidate.nomUsuari &&
        user.contrasenya === userToValidate.contrasenya
    );
    return !!foundUser;
  }
}
