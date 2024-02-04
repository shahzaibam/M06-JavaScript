import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { isEmpty } from 'rxjs';
import { Producte } from 'src/app/model/Producte';
import { MerchandisingComponent } from '../merchandising/merchandising.component';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
})
export class CompraComponent implements OnInit {


//creamos el Producto
  carrito: Producte[] = [];
  constructor(private cookie:CookieService){

  }
//array push a carrito con los datos de producto
  ngOnInit(): void {
    const carritoString = this.cookie.get("comprat"); // Obtener la cadena de la cookie
    if (carritoString) { // Verificar si la cadena existe
      this.carrito = JSON.parse(carritoString); // Convertir la cadena a un array de Producte
    }
    console.log(this.carrito);
  }
}
