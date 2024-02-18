import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.css']
})
export class FatherComponentComponent {

  message!:string;

  messageFromChild!:string;

  constructor() {
  }

  sendMessage() {
    this.message = "Hola hijo, soy tu padre."
  }

  receiveMessage(message:string) {
    this.messageFromChild = message;
  }
}
