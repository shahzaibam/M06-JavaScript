import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit{

  compraEntera!:any;

  parsedData!:any;

  preciosProductos = 0;
  cantidad = 0;

  precioFinal = 0;

  constructor(private cookie: CookieService) {
  }


  ngOnInit(): void {
    this.getCompra();
  }

  getCompra(){
    this.compraEntera = this.cookie.get("compra");
    this.parsedData = JSON.parse(this.compraEntera);


    this.parsedData.forEach((item:any) => {
      this.preciosProductos += item.preu;
      this.cantidad += item.quantitat;
    })

    this.precioFinal = this.preciosProductos * this.cantidad;

    console.log(this.parsedData);
  }


}
