import {Component, EventEmitter, Output} from '@angular/core';
import {Producte} from 'src/app/model/Producte';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-merchandising',
  templateUrl: './merchandising.component.html',
  styleUrls: ['./merchandising.component.css'],
})
export class MerchandisingComponent {
  productoAAnyadir!: Producte[];
  productoAnyadirString!: string;

  //añadimos los 4 productos
  productos: Producte[] = [
    new Producte('producto1.jpg', 'Producto1', 'Descripción1', 10, 2, 0),
    new Producte('producto2.jpg', 'Producto2', 'Descripción2', 10, 3, 0),
    new Producte('producto3.jpg', 'Producto3', 'Descripción3', 10, 4, 0),
    new Producte('producto4.jpg', 'Producto4', 'Descripción4', 10, 5, 0),
  ];

//constructor
  constructor(private cookie: CookieService) {
    this.productoAAnyadir = [];
  }


//añadimos el producto
  afegirProducte(producto: Producte) {
    if (this.productoAAnyadir.some(p => p.nomProducte == producto.nomProducte)) {
      const totalProd = this.productoAAnyadir.map(prod => {

        if (prod.nomProducte == producto.nomProducte) {
          prod.disponibilitat--;
          prod.quantitat++;

          if (prod.disponibilitat == 0) {
            //deshabilito el botó
          }
        }
        return prod;
      })

    } else {
      producto.disponibilitat--;
      producto.quantitat = 1;
      this.productoAAnyadir.push(producto);
    }
    //Deures per dilluns: què ficar dins. Haig de treure texte
    //caldria fiucar l'array this.productoAAnyadir

    this.cookie.set("comprat", JSON.stringify(this.productoAAnyadir));
  }
}
