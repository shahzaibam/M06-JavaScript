export class User {
  // variables
  #name: string;
  #password: string;

  // contructor
  constructor(name: string, password: string) {
    this.#name = name;
    this.#password = password;
  }

  // setters i getters
  get name(): string {
    return this.#name;
  }
  get password(): string {
    return this.#password;
  }

  set name(Name: string) {
    this.#name = Name;
  }
  set password(Password: string) {
    this.#password = Password;
  }

  // funciones
  toObjectJS(): any {
    let myObject = {
      name: this.#name,
      password: this.#password,
    };
    return myObject;
  }
}
