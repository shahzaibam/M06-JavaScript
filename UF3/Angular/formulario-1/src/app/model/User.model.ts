export class UserModel {

  constructor(
    public nomUsuari:string,
    public contrasenya:string,
    public correuElectronic:string,
    public estatCivil:string,
    public sexe:string,
    public informacio:string,
    public condicions:boolean,
    public edad:number)
  {}
}
