import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//Utilidad 1 : servicio es la puera de salida de la aplicacion
//pueden haber muchos servicios, tantos como CRUD a tablas quiera hacer

//Utilidad 2 : los servicios tambien me dejan compartir/acceder a valores comunes entre componentes

//Ejemplo de la sergunda utilidad
//este servicio va a crear valores y los componenetes van a acceder
export class MyFirstServiceService {

  constructor() { }

  createFruites():string[] {
    let tipusFruites:string[] = ["poma", "pera", "taronja"];
    let fruites:string[] = [];

    for (let i:number = 0; i<1000; i++) {
      let j = Math.floor(Math.random()*3);
      fruites.push(tipusFruites[j]);
    }
    return fruites;
  }

}
