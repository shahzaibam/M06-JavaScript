import { Component } from '@angular/core';
import {Producte} from "../../model/Producte";

@Component({
  selector: 'app-merchandising',
  templateUrl: './merchandising.component.html',
  styleUrls: ['./merchandising.component.css']
})
export class MerchandisingComponent {

  productos: Producte[] = [
    new Producte('producto1.jpg', 'Producto1', 'Descripción1', 10, 2, 0),
    new Producte('producto2.jpg', 'Producto2', 'Descripción2', 10, 3, 0),
    new Producte('producto3.jpg', 'Producto3', 'Descripción3', 10, 4, 0),
    new Producte('producto4.jpg', 'Producto4', 'Descripción4', 10, 5, 0),
  ]

  constructor() {
  }

}
