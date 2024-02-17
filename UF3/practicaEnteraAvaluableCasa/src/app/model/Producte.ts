export class Producte {
  #nomImatge: string;
  #nomProducte: string;
  #descripcio: string;
  #preu: number;
  #disponibilitat: number;
  #quantitat: number;

  constructor(
    nomImatge: string = '',
    nomProducte: string = '',
    descripcio: string = '',
    preu: number = 0,
    disponibilitat: number = 0,
    quantitat: number = 0
  ) {
    this.#nomImatge = nomImatge;
    this.#nomProducte = nomProducte;
    this.#descripcio = descripcio;
    this.#preu = preu;
    this.#disponibilitat = disponibilitat;
    this.#quantitat = quantitat;
  }


  get nomImatge(): string {
    return this.#nomImatge;
  }

  set nomImatge(value: string) {
    this.#nomImatge = value;
  }

  get nomProducte(): string {
    return this.#nomProducte;
  }

  set nomProducte(value: string) {
    this.#nomProducte = value;
  }

  get descripcio(): string {
    return this.#descripcio;
  }

  set descripcio(value: string) {
    this.#descripcio = value;
  }

  get preu(): number {
    return this.#preu;
  }

  set preu(value: number) {
    this.#preu = value;
  }

  get disponibilitat(): number {
    return this.#disponibilitat;
  }

  set disponibilitat(value: number) {
    this.#disponibilitat = value;
  }

  get quantitat(): number {
    return this.#quantitat;
  }

  set quantitat(value: number) {
    this.#quantitat = value;
  }

  toObjectJS(): any {
    let myObject = {
      nomImatge: this.#nomImatge,
      nomProducte: this.#nomProducte,
      descripcio: this.#descripcio,
      preu: this.#preu,
      disponibilitat: this.#disponibilitat,
    };
    return myObject;
  }

}
