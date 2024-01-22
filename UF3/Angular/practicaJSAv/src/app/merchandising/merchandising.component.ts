import { Component } from '@angular/core';

export class Producte {
  constructor(
    public nomImatge: string,
    public nomProducte: string,
    public descripcio: string,
    public preu: number,
    public disponibilitatMaxima: number
  ) {}
}

@Component({
  selector: 'app-merchandising',
  templateUrl: './merchandising.component.html',
  styleUrls: ['./merchandising.component.css']
})
export class MerchandisingComponent {
  productos: Producte[] = [
    new Producte('../../../assets/img/producto1.jpg', 'Producto 1', 'Descripción del Producto 1', 10.99, 50),
    new Producte('../../../assets/img/producto2.jpg', 'Producto 2', 'Descripción del Producto 2', 20.99, 30),
    new Producte('../../../assets/img/producto3.jpg', 'Producto 3', 'Descripción del Producto 3', 15.99, 20),
    new Producte('../../../assets/img/producto4.jpg', 'Producto 4', 'Descripción del Producto 4', 25.99, 10),
  ];

  constructor() {}

  comprarProducto(producto: Producte): void {
    console.log(`Compraste: ${producto.nomProducte}`);
  }

  afegirProducte(producto: Producte): void {
    console.log(`Añadiste: ${producto.nomProducte}`);
  }
}
