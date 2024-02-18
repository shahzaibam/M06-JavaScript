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

  preuxcuantitat = 0;

  precioFinal = 0;

  messageFinalizarCompra = '';

  constructor(private cookie: CookieService) {
  }


  ngOnInit(): void {
    this.getCompra();
  }

  getCompra(){
    this.compraEntera = this.cookie.get("compra");
    this.parsedData = JSON.parse(this.compraEntera);


    this.parsedData.forEach((item:any) => {
      this.preuxcuantitat += item.preu * item.quantitat;
    })



    this.precioFinal = this.preuxcuantitat;

    console.log(this.parsedData);
  }



  finalizarCompra() {
    if(this.parsedData) {
      this.messageFinalizarCompra = 'La compra se ha realizado con éxito !!';
    }else {
      this.messageFinalizarCompra = 'Porfavor compra algo !!';
    }
  }

  cancelarCompra() {
    this.cookie.set("compra", '');
    location.reload();
  }

}
