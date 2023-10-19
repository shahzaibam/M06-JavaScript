export class User { //EXPORT = fer visible la classe desde fora
    
    //atributs, propietats

        #username; //# vol dir que l'atribut username és privat
        #password; //# vol dir que l'atribut password és privat
        //email; //aquest atribut és public. (MILLOR QUE NO SIGUI PUBLIC !!!)


    //constructor

        constructor(username, password) {

            this.#username = username;
            this.#password = password;

        }

    //getter, setters : SEMPRE PÚBLCS. Serveixen per recollir un valor d' atributs o retornar el valor

        get username() {
            return this.#username;
        }

        get password() {
            return this.#password;
        }

        set username(value) {
            this.#username = value;
        }

        set password(value) {
            this.#password = value;
        }


    //mètodes : accions de l'usuari. Poden ser públics o privats

        printing() {
            return `El teu nom és ${this.#username}, ${this.#password}`;
        }

}