export class Events {
  // variables
  #id: number | null;
  #nombre: string;
  #descripcion: string;
  #fecha: string;
  #hora: string;
  #creado_por: string;

  // contructor
  constructor(nombre: string, descripcion: string, fecha: string, hora: string, creado_por: string, id?: number) {
    this.#id = id ?? null;
    this.#nombre = nombre;
    this.#descripcion = descripcion;
    this.#fecha = fecha;
    this.#hora = hora;
    this.#creado_por = creado_por;
  }


  // setters i getters
   get id(): number | null {
    return this.#id;
  }
  get nombre(): string {
    return this.#nombre;
  }
  get descripcion(): string {
    return this.#descripcion;
  }
  get fecha(): string {
    return this.#fecha;
  }
  get hora(): string {
    return this.#hora;
  }
  get creado_por(): string {
    return this.#creado_por;
  }
  set id(id: number) {
    this.#id = id;
  }
  set nombre(nombre: string) {
    this.#nombre = nombre;
  }
  set descripcion(descripcion: string) {
    this.#descripcion = descripcion;
  }
  set fecha(fecha: string) {
    this.#fecha = fecha;
  }
  set hora(hora: string) {
    this.#hora = hora;
  }

  set creado_por(creado_por: string) {
    this.#creado_por = creado_por;
  }
  // funciones
  toObjectJS(): any {
    let myObject = {
      id: this.#id,
      nombre: this.#nombre,
      descripcion: this.#descripcion,
      fecha: this.#fecha,
      hora: this.#hora,
    };
    return myObject;
  }
}
