import { Component } from '@angular/core';
import { SharedDataService } from "../../sharedData/shared-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private sharedData: SharedDataService) {
  }

  enviar() {
    this.sharedData.enviarMensaje("logout");
  }
}
