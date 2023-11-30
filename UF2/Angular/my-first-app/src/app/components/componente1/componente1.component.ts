import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {

  //atributos de la clase: son publicos (no tienen #)
  customer:string = "Maria"; //este atributo es una cadena TypeScript
  age:number = 21;
  id=12121212; //identificador

  years:any = [1985, 2023, 2000, 1999, 2002];

  nom:String = "";

  valor:number = 1;

  frutas:any[] = [
    {
      nombre: "pera",
      precio: 1.70,
      cantidad: 50
    },

    {
      nombre: "uvas",
      precio: 1.50,
      cantidad: 30
    },

    {
      nombre: "manzana",
      precio: 1.80,
      cantidad: 10
    },
  ]


  //metodos de la clase

  subir() {
    this.valor++;
  }

  borrar(nombreFruta:string) {
    console.log(nombreFruta);

    this.frutas = this.frutas.filter(x=>x.nombre != nombreFruta); //devuelveme los nombres que sean diferentes a nombreFruta
  }
}
