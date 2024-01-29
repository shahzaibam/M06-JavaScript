import {Component, OnInit} from '@angular/core';
import {DataSharingService} from "../../shared/data-sharing.service";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit{

  message:string = 'Hola!! soy el componente 1';

  constructor(private sharedService: DataSharingService) {
  }


  /**
   * para que envie el mensaje instantaneamente cuando se cargue la pagina hay que poner el setTimeOut dentro del ngOnInit,
   * o si no podemos crear una funcion enviar() y crear un boton que cuando pulses en el boton ejecute la funcion enviar()
   * y asi envias el mensaje, entonces si haces el metodo del boton no haria falta el OnInit
   */
  ngOnInit() {
    setTimeout(() => {
      this.sharedService.enviarMensaje('Hola desde Componente 1');
    });
  }

}
