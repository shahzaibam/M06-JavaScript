import {Component} from '@angular/core';
import {Producte} from "../../model/Producte";
import {CookieService} from "ngx-cookie-service";

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

  carrito: Producte[] = [];

  constructor(private cookie:CookieService) {

  }

  afegirProducte(producte: Producte) {


    if(producte.disponibilitat != 0) {
      producte.disponibilitat--;

      let producteJaAfegit = this.carrito.find(item => item.nomProducte == producte.nomProducte);

      if(producteJaAfegit) {
        alert("producte ja afegit");
        producteJaAfegit.quantitat++;
      }else {
        alert("afegint nou producte");
        producte.quantitat++;
        this.carrito.push(producte);
      }


    } else {
      alert("Producte esgotat");
    }

    console.log(this.carrito);

    this.cookie.set('compra', JSON.stringify(this.carrito));


  }

}
