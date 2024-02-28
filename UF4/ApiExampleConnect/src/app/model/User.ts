export class User{

    #dni:string;
    #usuari:string;
    #contrasenya:string;
    #role:string;

    constructor( dni:string="",  role:string="", usuari:string="",  contrasenya:string=""){
        this.#dni=dni;
        this.#usuari=usuari;
        this.#contrasenya=contrasenya;
        this.#role=role;

    }
    public get dni(){
        return this.#dni;
    }
    public get usuari(){
        return this.#usuari;
    }
    public get contrasenya(){
        return this.#contrasenya;
    }
    public get role(){
        return this.#role;
    }
    public set dni(dni:string){
        this.#dni=dni;
    }
    public set usuari(usuari:string){
        this.#usuari=usuari;
    }
    public set contrasenya(contrasenya:string){
        this.#contrasenya=contrasenya;
    }
    public set role(role:string){
        this.#role=role;
    }


}
