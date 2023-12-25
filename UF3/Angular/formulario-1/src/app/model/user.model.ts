export class User {
  constructor(
    public nomUsuari: string,
    public contrasenya: string,
    public correuElectronic: string,
    public estatCivil: string,
    public sexe: string,
    public informacio: string,
    public acceptarCondicions: boolean,
    public edad: number
  ) {}
}
