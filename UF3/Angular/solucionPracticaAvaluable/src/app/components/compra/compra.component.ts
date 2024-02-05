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

  precioTotal:number = 0;

  mensaje:string = "";

  constructor(private cookie:CookieService){

  }
//array push a carrito con los datos de producto
  ngOnInit(): void {
    const carritoString = this.cookie.get("comprat"); // Obtener la cadena de la cookie
    if (carritoString) { // Verificar si la cadena existe
      this.carrito = JSON.parse(carritoString); // Convertir la cadena a un array de Producte
    }

    for (let i = 0; i<this.carrito.length; i++) {
      this.precioTotal += this.carrito[i].preu * this.carrito[i].quantitat;
    }
  }


  cancelarCesta() {
    this.cookie.set("comprat", '');

    location.reload();
  }

  comprar() {
    this.mensaje = "Comprado correctamente!!";
  }
}
