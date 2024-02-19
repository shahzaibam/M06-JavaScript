export class Article {
  private _nom: string;
  private _descripcio: string;
  private _preu: number;

  constructor(nom: string, descripcio: string, preu: number) {
    this._nom = nom;
    this._descripcio = descripcio;
    this._preu = preu;
  }


  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get descripcio(): string {
    return this._descripcio;
  }

  set descripcio(value: string) {
    this._descripcio = value;
  }

  get preu(): number {
    return this._preu;
  }

  set preu(value: number) {
    this._preu = value;
  }
}
